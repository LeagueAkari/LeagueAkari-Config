<div class="akari-markdown download-link-container">
  <div class="akari-markdown download-link-title flow-gradient-text ">走过路过不要错过！</div>
  <div class="akari-markdown download-link-body">在 v1.4.2 以及其之前的版本中，由于一些问题，它们已经无法自动更新的新的版本。😭</div>
  <div class="akari-markdown download-link-body">因此😀，如果你要使用最新的版本并正常享受后续版本的自动更新，你需要<span class="akari-markdown flow-gradient-text">手动下载</span>最新的版本。😘💕如下提供三种方式来下载新版本：</div>

  <div class="akari-markdown download-link-buttons">
    <a target="_blank" href="https://akari-static.hanxven.cc/League%20Akari-1.4.3-win.7z" class="akari-markdown download-link-button">直链下载</a>
    <a target="_blank" href="https://hanxven.lanzoum.com/b0mc8n1re" class="akari-markdown download-link-button">蓝奏云网盘 (提取码：miku)</a>  
    <a target="_blank" href="https://github.com/LeagueAkari/LeagueAkari/releases/download/v1.4.3/League.Akari-1.4.3-win.7z" class="akari-markdown download-link-button">GitHub 下载</a>
  </div>
</div>

# v1.4.3 (2026-01-22)

v1.4.3，主要面向修复，和少量功能更新。

## 1. 新增

- OP.GG 小窗口中，添加海克斯乱斗英雄的海克斯强度数据。

## 2. 修复

- 修复了自动英雄选择 / 禁用功能中，时间计算错误的问题。现在会始终将时间限定在当前阶段的可用时间内。

- 修复了对局页面在某些情况下，无法正常展示胜率的问题。

- 修复了开黑判断错误的问题，曾导致可能会错误地将部分游玩过的玩家判定为预组队。

- 修复了之前忽略此版本更新功能失效的问题。

## 3. 调整

- 自动更新的解压流程，现在由自动更新器接管，不再由应用自身完成。

- 公告会弹出小型 popover 以供预览核心内容。

- 战绩卡片斗魂竞技场模式中，现在会显示“金币”列。

- 添加了更多的方式，以保证自动更新系统的可用性。

## 4. 免责声明

本软件是基于 Riot 的 League Client Update (LCU) API 开发的工具。它不使用侵入性技术，理论上不会直接干扰或修改游戏数据。但是，请注意可能存在的兼容性问题或与游戏更新或反作弊系统相关的风险。

此外，本应用并非由 Riot Games 官方支持或认可，Riot Games 保留所有权利。使用本应用风险自负，因为它可能违反游戏的服务条款。

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
</style>
