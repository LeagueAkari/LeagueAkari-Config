// 原型来自：https://github.com/real-web-world/hh-lol-prophet

// 基础分
const BASE_SCORE = 100;

// 在 5 小时以内，算作近期对局
const RECENT_WINDOW_HOURS = 5;

// 分数权重：近期权重 vs 历史权重，需要满足 RECENT_WEIGHT + OLD_WEIGHT = 1
const RECENT_WEIGHT = 0.8; // 近期权重 80%
const OLD_WEIGHT = 0.2; // 历史权重 20%

// 指标排名得分，如第一名 10分，第五名 -10分
const RANKING_SCORE = { 0: 10, 1: 5, 2: 0, 3: -5, 4: -10 };

// 评级门槛
const GRADE_THRESHOLDS = { S: 180, A: 150, B: 125, C: 105, D: 95 };

// 牛马中文名
const NIUMA_NAME = {
  S: "通天代",
  A: "小代",
  B: "上等马",
  C: "中等马",
  D: "下等马",
  E: "牛马",
  F: "没有马",
};

// 多杀分数奖励
const MULTI_KILL_BONUS = { triple: 5, quadra: 10, penta: 20 };

// 补兵分数奖励
const CS_BONUS = { 10: 20, 9: 10, 8: 5 };

// 占比 + 具体数值奖励
const CONTRIBUTION_BONUS = {
  heavy: [
    [15, 40],
    [10, 20],
    [5, 10],
  ],
  light: [
    [15, 20],
    [10, 10],
    [5, 5],
  ],
};

// 如果敌方某成员分数低于 D，则将其设置为 F，而不是 E
const TRANSFORM_ENEMY_TO_F = true;

const noZero = (n) => (n === 0 ? 1 : n);
const avg = (arr) => sumBy(arr, (x) => x.base) / arr.length;
const sumBy = (arr, pick) => arr.reduce((t, x) => t + pick(x), 0);

/**
 * 从 LcuOrSgpGameSummary 中提取游戏数据
 */
function extractGame(puuid, gameSummary) {
  const game = gameSummary.data;
  const source = gameSummary.source;

  let me;
  let mates;

  if (source === "lcu") {
    const participantId = game.participantIdentities.find(
      (p) => p.player.puuid === puuid
    )?.participantId;
    if (!participantId) return null;

    me = game.participants.find((p) => p.participantId === participantId);
    if (!me) return null;

    mates = game.participants.filter((p) => p.teamId === me.teamId);
  } else if (source === "sgp") {
    const participant = game.json.participants.find((p) => p.puuid === puuid);
    if (!participant) return null;

    me = participant;
    const myTeamId = participant.teamId;
    mates = game.json.participants.filter((p) => p.teamId === myTeamId);
  } else {
    return null;
  }

  const getStats = (participant) =>
    source === "lcu" ? participant.stats : participant;

  const totalKills = sumBy(mates, (p) => getStats(p).kills || 0);
  const totalDmg = sumBy(
    mates,
    (p) => getStats(p).totalDamageDealtToChampions || 0
  );
  const totalAssists = sumBy(mates, (p) => getStats(p).assists || 0);

  const meStats = getStats(me);

  const participantIdentifier = (participant) => {
    if (source === "lcu") return participant.participantId;
    return (
      participant.participantId ??
      participant.puuid ??
      participant.summonerId ??
      participant.gameName ??
      participant.cellId
    );
  };

  const meIdentifier = participantIdentifier(me);

  // ---------- 排名 ----------
  const rank = (arr) =>
    arr.findIndex((p) => participantIdentifier(p) === meIdentifier);

  const sortBy = (key) =>
    [...mates].sort((a, b) => {
      const aStats = getStats(a);
      const bStats = getStats(b);
      const aVal = aStats[key] || 0;
      const bVal = bStats[key] || 0;
      return bVal - aVal;
    });

  const kprRank = rank(
    [...mates].sort((a, b) => {
      const aStats = getStats(a);
      const bStats = getStats(b);
      const ka = (aStats.kills || 0) + (aStats.assists || 0);
      const kb = (bStats.kills || 0) + (bStats.assists || 0);
      return ka === kb ? (aStats.deaths || 0) - (bStats.deaths || 0) : kb - ka;
    })
  );
  const grRank = rank(sortBy("goldEarned"));
  const drRank = rank(sortBy("totalDamageDealtToChampions"));
  const vrRank = rank(sortBy("visionScore"));

  const killShare = (meStats.kills || 0) / noZero(totalKills);
  const damageShare =
    (meStats.totalDamageDealtToChampions || 0) / noZero(totalDmg);
  const assistShare = (meStats.assists || 0) / noZero(totalAssists);

  let isSupport = null;
  if (source === "sgp") {
    isSupport = me.teamPosition === "UTILITY";
  }

  const gameCreation =
    source === "lcu" ? game.gameCreation : game.json.gameCreation;

  const rawDuration =
    source === "lcu" ? game.gameDuration : game.json.gameDuration;
  const safeDuration = Math.max(rawDuration || 0, 1);
  const durationMinutes = safeDuration / 60;

  const totalCs =
    (meStats.totalMinionsKilled || 0) + (meStats.neutralMinionsKilled || 0);
  const kills = meStats.kills || 0;
  const assists = meStats.assists || 0;
  const ka = kills + assists;
  const deaths = meStats.deaths ?? 0;

  return {
    isRecent: Date.now() - gameCreation < RECENT_WINDOW_HOURS * 60 * 60 * 1000,
    isSupport,

    // 里程碑
    isFirstBlood: meStats.firstBloodKill || false,
    isFirstBloodAssist: meStats.firstBloodAssist || false,
    triple: meStats.tripleKills || 0,
    quadra: meStats.quadraKills || 0,
    penta: meStats.pentaKills || 0,

    // 基础
    kills,
    deaths,
    assists,

    // 排名
    kprRank,
    grRank,
    drRank,
    vrRank,

    // 占比 > 0.35 / 0.5
    isKrGt35: killShare > 0.35,
    isKrGt50: killShare > 0.5,
    isDrGt35: damageShare > 0.35,
    isDrGt50: damageShare > 0.5,
    isArGt35: assistShare > 0.35,
    isArGt50: assistShare > 0.5,

    csPerMin: totalCs / durationMinutes,

    kpr: ka / noZero(totalKills),
    kda: ka / noZero(deaths),
    memberCount: mates.length,
  };
}

/**
 * 单场评分
 */
function calcBaseScore(s) {
  let score = BASE_SCORE;

  // 一血
  if (s.isFirstBlood) score += 10;
  if (s.isFirstBloodAssist) score += 5;

  // 多杀
  score +=
    (s.triple ? MULTI_KILL_BONUS.triple : 0) +
    (s.quadra ? MULTI_KILL_BONUS.quadra : 0) +
    (s.penta ? MULTI_KILL_BONUS.penta : 0);

  // 排名得分
  score += RANKING_SCORE[s.kprRank] ?? 0;
  if (s.isSupport ? s.grRank <= 1 : true) score += RANKING_SCORE[s.grRank] ?? 0;
  if (s.drRank <= 1) score += RANKING_SCORE[s.drRank] ?? 0;
  if (s.vrRank <= 1) score += RANKING_SCORE[s.vrRank] ?? 0;

  // 占比 + 数值奖励
  const addContribution = (heavy, cnt) => {
    const table = CONTRIBUTION_BONUS[heavy ? "heavy" : "light"];
    for (const [threshold, bonus] of table) if (cnt > threshold) return bonus;
    return 0;
  };
  score += s.isKrGt50
    ? addContribution(true, s.kills)
    : s.isKrGt35
    ? addContribution(false, s.kills)
    : 0;
  score += s.isArGt50
    ? addContribution(true, s.assists)
    : s.isArGt35
    ? addContribution(false, s.assists)
    : 0;
  score += s.isDrGt50
    ? addContribution(true, s.kills)
    : s.isDrGt35
    ? addContribution(false, s.kills)
    : 0;

  // CS 奖励
  for (const cs in CS_BONUS)
    if (s.csPerMin >= cs) {
      score += CS_BONUS[cs];
      break;
    }

  // KDA + KPR 修正
  score += s.kda + ((s.kills - s.deaths) / noZero(s.memberCount)) * s.kpr;

  return score;
}

/**
 * 按权重计算最终得分
 */
function mergeScores(list) {
  const recent = list.filter((i) => i.isRecent);
  const old = list.filter((i) => !i.isRecent);

  if (!recent.length) return avg(old);
  if (!old.length) return avg(recent);
  return avg(recent) * RECENT_WEIGHT + avg(old) * OLD_WEIGHT;
}

/**
 * 评级，从 S 到 F。根据设置，己方最低分为 E，敌方最低分为 F
 */
function gradeName(score, isAlly) {
  if (score >= GRADE_THRESHOLDS.S) return NIUMA_NAME.S;
  if (score >= GRADE_THRESHOLDS.A) return NIUMA_NAME.A;
  if (score >= GRADE_THRESHOLDS.B) return NIUMA_NAME.B;
  if (score >= GRADE_THRESHOLDS.C) return NIUMA_NAME.C;
  if (score >= GRADE_THRESHOLDS.D) return NIUMA_NAME.D;
  return TRANSFORM_ENEMY_TO_F && !isAlly ? NIUMA_NAME.F : NIUMA_NAME.E;
}

/**
 * 生成要发送的文本
 */
function buildPlayerLine({ env, puuid, score }) {
  const inChampSelect =
    env.queryStage?.phase === "champ-select" ||
    env.queryStage?.phase === "lobby";

  const championId = env.championSelections?.[puuid] ?? -1;
  const championName =
    env.gameData?.championName?.(championId) ||
    env.gameData?.champions?.[championId]?.name ||
    "未知英雄";

  const summonerName = env.summoner[puuid]?.gameName || "未知召唤师";
  const display = inChampSelect ? summonerName : championName;

  if (score === null) return `${display} 近期无有效对局`;

  const isAlly = env.allyMembers?.includes(puuid) ?? false;
  const grade = gradeName(score, isAlly);

  const summary = env.playerStats?.players?.[puuid]?.summary || {};
  const { avgKda = 0, count = 0, winRate = 0 } = summary;

  const fixedScore = inChampSelect ? score.toFixed(0) : score.toFixed(1);
  const kdaFixed = avgKda.toFixed(inChampSelect ? 1 : 2);
  const winRateFixed = (winRate * 100).toFixed(0);

  return `${grade} ${display} 评分: ${fixedScore}，近${count}场KDA ${kdaFixed} 胜率 ${winRateFixed}%`;
}

/**
 * 生成聊天输出
 * @param {import('./env-types').TemplateEnv} env
 * @returns {string[]}
 */
function getMessages(env) {
  const isPveQueue =
    typeof env.utils?.isPveQueue === "function"
      ? env.utils.isPveQueue
      : () => false;

  const targets = env.targetMembers || [];

  const players = targets.map((puuid) => {
    const mh = env.matchHistory?.[puuid];
    if (!mh?.data) return { puuid, score: null };

    const valid = mh.data
      .filter((g) => g && g.data)
      .filter((g) => !isPveQueue(g.data.queueId));

    const scores = valid
      .map((g) => extractGame(puuid, g))
      .filter(Boolean)
      .map((s) => ({ base: calcBaseScore(s), isRecent: s.isRecent }));

    if (!scores.length) return { puuid, score: null };
    return { puuid, score: mergeScores(scores) };
  });

  return players.map((p) =>
    buildPlayerLine({ env, puuid: p.puuid, score: p.score })
  );
}

/** 模板元数据 */
function getMetadata() {
  return { version: 20, type: "ongoing-game" };
}
