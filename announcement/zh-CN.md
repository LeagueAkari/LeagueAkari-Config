---
comment: 如果你能看到这个，说明你需要更新版本了 (v1.3.7+)
alertLevel: medium
summary: 官方一群又被封禁通知
---

## 公告板 (更新于 2026-04-16 21:00)

League Akari，目前的最新版本为 v1.4.3。

### (新) 聚集地 & 反馈渠道之一

~~由于前一群存在一些违规行为（涩情信息，懂的都懂），已被做掉。已经重建了一个新的群聊。~~

新的一群也被拿下了，将在近期创建新新一群，请关注公告。

|                            | 传送门                                       | 备注                         |
| -------------------------- | -------------------------------------------- | ---------------------------- |
| QQ 群 (二号据点 / 2000 人) | [543703181](https://qm.qq.com/q/WEmiNuHBuY)  | 口令 **akari**               |
| Telegram                   | [@KawaiiAkari](https://t.me/KawaiiAkari)     | 分身群兼避难所，通常不活跃。 |

1. 群聊会定期清理**长期不说话的**成员，并且通常不会事先通知。
2. 请确保你掌握基础的计算机常识。如，可以正确使用解压缩软件，知晓“快捷方式”和“主程序”的区别，知道如何发送日志文件，以及会高效且精确地地描述问题。
3. 不要搞涩涩，真的会封群。

#### 1. 目前已确认可能会导致账号封禁的功能

- 计时器叠加窗口 - 导致封号，原因为“违规软件加载”
- 对局叠加窗口 - 导致封号，原因为“违规软件加载”
- 游戏内发送 - 导致禁言

**请立即停用这些功能。**

计时器叠加窗口、对局叠加窗口：位于 `设置` -> `窗口管理` -> `计时器叠加窗口` 和 `对局叠加窗口`。

游戏内发送：位于 `工具集` -> `游戏内发送`。

不过，这些功能是默认关闭的。

我们仍在确认和排查其他可能会导致封号的功能。

#### 2. 目前已确认的问题

- 企鹅服版本更新后（2 月 4 日更新，26.3 版本），由于接口变更，观战功能（玩家主页查看某玩家是否位于游戏以及本场游戏相关成员）已失效，无法解决。
  > 顺便一提：直营服服早就不能用了。

---

### 为确保未来可以收到更新通知，请更新到 v1.4.3

<div class="akari-markdown download-link-container">
  <div class="akari-markdown download-link-title flow-gradient-text ">走过路过不要错过！</div>
  <div class="akari-markdown download-link-body">在 v1.4.2 以及其之前的版本中，由于一些问题，它们已经无法自动更新到新的版本。😭</div>
  <div class="akari-markdown download-link-body">因此😀，如果你要使用最新的版本并正常享受后续版本的自动更新，你需要<span class="akari-markdown flow-gradient-text">手动下载</span>最新的版本。😘💕如下提供三种方式来下载新版本：</div>

  <div class="akari-markdown download-link-buttons">
    <a target="_blank" href="https://hanxven.lanzoum.com/b0mc8n1re" class="akari-markdown download-link-button">蓝奏云网盘 (提取码：miku)</a>  
    <a target="_blank" href="https://akari-static.hanxven.cc/League%20Akari-1.4.3-win.7z" class="akari-markdown download-link-button">直链下载</a>
    <a target="_blank" href="https://github.com/LeagueAkari/LeagueAkari/releases/download/v1.4.3/League.Akari-1.4.3-win.7z" class="akari-markdown download-link-button">GitHub 下载</a>
  </div>
</div>

### 关于 League Akari

它是**免费**、**开源**的，许可证是 GPL-3.0。它不会在任何渠道（如抖音、闲鱼、淘宝以及各种平台）进行售卖。

觉得这个项目不错？去 [GitHub](https://github.com/LeagueAkari/LeagueAkari) 点一颗免费的 ⭐，以支持我们继续开发。

#### 开源策略变更须知

League Akari 项目自始至终秉持开源与分享精神，致力于为广大英雄联盟玩家提供优质的工具。然而，近期我们发现市场上出现了未经授权的二次包装及售卖行为，甚至存在部分个人或组织在我们的基础上加以修改并以收费形式进行分发。这种行为严重损害了项目团队及广大用户的合法权益。

从即日起，League Akari 项目源代码将仅同步发布至几个版本之前的历史版本。最新版本的源代码将不再第一时间公开，仅会在经过一段时间后，选择性地发布部分更新内容。

<style>
.akari-markdown.flow-gradient-text, .akari-markdown .flow-gradient-text {
  background-size: 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  animation: akari-markdown-gradient-move 8s ease-in-out infinite;
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  .akari-markdown.flow-gradient-text, .akari-markdown .flow-gradient-text {
    background-image: linear-gradient(
      90deg,
      #91dcff 0%,
      #91dcff 10%,
      #ff59cb 55%,
      #ffc1eb 100%
    );
  }
}

@media (prefers-color-scheme: light) {
  .akari-markdown.flow-gradient-text, .akari-markdown .flow-gradient-text {
    background-image: linear-gradient(
      90deg,
      #0891b2 0%,
      #0891b2 10%,
      #db2777 55%,
      #ec4899 100%
    );
  }
}

.akari-markdown.download-link-container {
  padding: 16px;
  border-radius: 8px;
  border: 2px solid;
  animation: akari-border-blink 0.5s steps(1) infinite;

  .akari-markdown.download-link-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .akari-markdown.download-link-body {
    font-size: 14px;
    
    & + & {
      margin-top: 8px;
    }
  }

  .akari-markdown.download-link-buttons {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 16px;
  

    .akari-markdown.download-link-button {
      padding: 8px 16px;
      background-color: #f83f6f;
      border-radius: 4px;
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.2s ease;

      &:hover {
        background-color: #e61d4f;
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
}

@media (prefers-color-scheme: light) {
  .akari-markdown.download-link-container {
    background-color: #e5e7eb;
  }
  .akari-markdown.download-link-title {
    color: #1f2328;
  }
}

@media (prefers-color-scheme: dark) {
  .akari-markdown.download-link-container {
    background-color: #252a34;
  }
  .akari-markdown.download-link-title {
    color: #f0f6fc;
  }
}

@keyframes akari-markdown-gradient-move {
  0% {
    background-position: 0% 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0% 0;
  }
}

@keyframes akari-border-blink {
  0% {
    border-color: #f83f6f;
  }
  50% {
    border-color: #fbbf24;
  }
}
</style>
