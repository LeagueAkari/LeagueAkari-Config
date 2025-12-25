// 包括自己吗?
const includeSelf = false

// 展示英雄名而不是玩家名
const showChampionName = true

function getMessages(env) {
  const getChampionName = (puuid) => {
    const championId = env.championSelections?.[puuid] ?? -1

    const fromGameData =
      typeof env.gameData?.championName === 'function'
        ? env.gameData.championName(championId)
        : null

    return (
      fromGameData ||
      env.gameData?.champions?.[championId]?.name ||
      env.summoner?.[puuid]?.data?.gameName ||
      '未知召唤师'
    )
  }

  const rats = env.targetMembers
    .map((puuid) => env.summoner?.[puuid]?.data || null)
    .filter((summoner) => {
      if (!summoner) {
        return false
      }

      if (!includeSelf && summoner.puuid === env.selfPuuid) {
        return false
      }

      return summoner.privacy === 'PRIVATE'
    })

  if (rats.length === 0) {
    switch (env.target) {
      case 'ally':
        return ['我方无隐藏战绩玩家！可喜可贺']
      case 'enemy':
        return ['敌方无隐藏战绩玩家！可喜可贺']
      case 'all':
        return ['本局无隐藏战绩玩家！可喜可贺']
      default:
        return []
    }
  }

  const messages = rats.map((summoner) => {
    const championName = getChampionName(summoner.puuid)
    const name = showChampionName
      ? championName
      : summoner.gameName || env.summoner?.[summoner.puuid]?.data?.gameName || championName

    const base = [`滴滴滴，检测到 ${name} 锁战绩`]

    const stats = env.playerStats?.players?.[summoner.puuid]
    const summary = stats?.summary
    if (summary) {
      const averageKda = Number.isFinite(summary.averageKda) ? summary.averageKda : 0
      const winRate = Number.isFinite(summary.winRate) ? summary.winRate : 0
      base.push(`KDA ${averageKda.toFixed(1)} 胜率 ${(winRate * 100).toFixed(0)}%`)

      const soloDeathGames = (env.matchHistory?.[summoner.puuid]?.data || [])
        .map((game) => stats?.games?.[game.gameId]?.soloDeaths)
        .filter((soloDeaths) => Array.isArray(soloDeaths) && soloDeaths.length > 0)

      const totalDeaths = soloDeathGames.reduce((acc, soloDeaths) => acc + soloDeaths.length, 0)
      if (totalDeaths > 0) {
        base.push(`在最近 ${soloDeathGames.length} 场游戏中，被单杀共 ${totalDeaths} 次`)
      }
    }

    return base.join(' ')
  })

  return messages
}

function getMetadata() {
  return {
    version: 21,
    type: 'ongoing-game'
  }
}
