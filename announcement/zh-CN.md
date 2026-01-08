---
comment: 如果你能看到这个，说明你需要更新版本了 (v1.3.7+)
alertLevel: high
---

## 公告板 (更新于 2026-01-08 20:00)

### <span class="flow-gradient-text-9e2b3c0b">(新)</span> Gitee 下载途径失效通知

目前，Gitee 已经阻断了 League Akari 的直链下载方式，这意味着软件内部的自动更新功能将失效（GitHub 数据源不受影响）。

因此，作为解决方案，若要更新到最新版本，可以选择：

1. 夸克网盘：[https://pan.quark.cn/s/0baa97982ae5](https://pan.quark.cn/s/0baa97982ae5)
2. 蓝奏云：[https://hanxven.lanzoum.com/b0mc8n1re](https://hanxven.lanzoum.com/b0mc8n1re)，提取码: **miku**
3. 如果你可以直连 GitHub，可将数据源切换至 GitHub，并触发自动更新。或在对应的 [Releases](https://github.com/LeagueAkari/LeagueAkari/releases) 页面下载最新版本。

### 已知 BUG

1. 开黑检测在部分情况下出现问题。
2. 设置中的手动检查更新按钮无效。
3. 当处于特定队列（如匹配队列）时，可能无法加载胜率等数据，或造成 UI 异常。

### 版本信息

目前最新版本是 v1.4.2，更新于 2026-01-05。主要内容为针对 v1.4.0 和 v1.4.1 版本中的已知问题进行修复。

由于近期发布的 v1.4.1 版本中存在对局窗口无法展示的问题，本次更新主要为修复此问题。

---

### 聚集地 & 反馈渠道之一

|                       | 传送门                                      | 备注                         |
| --------------------- | ------------------------------------------- | ---------------------------- |
| QQ 群 (一号据点)      | [301157623](https://qm.qq.com/q/F1Xv85etlm) | 口令 **akari**               |
| QQ 群 (二号据点 · 新) | [543703181](https://qm.qq.com/q/WEmiNuHBuY) | 口令 **akari**               |
| Telegram              | [@KawaiiAkari](https://t.me/KawaiiAkari)    | 分身群兼避难所，通常不活跃。 |

1. 群聊会定期清理潜水人员，并且通常不会事先通知。
2. 请确保你掌握基础的计算机常识。如，可以正确使用解压缩软件，知晓“快捷方式”和“主程序”的区别，知道如何发送日志文件，以及会高效且精确地地描述问题。

### 关于 League Akari

它是**免费**、**开源**的，许可证是 GPL-3.0。它不会在任何渠道（如抖音、闲鱼、淘宝以及各种平台）进行售卖。

觉得这个项目不错？去 [GitHub](https://github.com/LeagueAkari/LeagueAkari) 点一颗免费的 ⭐，以支持我们继续开发。

#### 开源策略变更须知

League Akari 项目自始至终秉持开源与分享精神，致力于为广大英雄联盟玩家提供优质的工具。然而，近期我们发现市场上出现了未经授权的二次包装及售卖行为，甚至存在部分个人或组织在我们的基础上加以修改并以收费形式进行分发。这种行为严重损害了项目团队及广大用户的合法权益。

从即日起，League Akari 项目源代码将仅同步发布至几个版本之前的历史版本。最新版本的源代码将不再第一时间公开，仅会在经过一段时间后，选择性地发布部分更新内容。

<style>
  .flow-gradient-text-9e2b3c0b {
    background-image: linear-gradient(
      90deg,
      #91dcff 0%,
      #91dcff 10%,
      #ff59cb 55%,
      #ffc1eb 100%
    );
    background-size: 400% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    animation: gradientMove-9e2b3c0b 8s ease-in-out infinite;
    font-weight: bold;
  }
  @keyframes gradientMove-9e2b3c0b {
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
</style>
