<div class="akari-markdown download-link-container">
  <div class="akari-markdown download-link-title flow-gradient-text ">Don't Miss Out!</div>
  <div class="akari-markdown download-link-body">In v1.4.2 and earlier versions, due to some issues, they can no longer automatically update to the new version. 😭</div>
  <div class="akari-markdown download-link-body">Therefore 😀, if you want to use the latest version and enjoy automatic updates for future versions, you need to <span class="akari-markdown flow-gradient-text">manually download</span> the latest version. 😘💕 Here are three ways to download the new version:</div>

  <div class="akari-markdown download-link-buttons">
    <a target="_blank" href="https://akari-static.hanxven.cc/League%20Akari-1.4.3-win.7z" class="akari-markdown download-link-button">Direct Download</a>
    <a target="_blank" href="https://hanxven.lanzoum.com/b0mc8n1re" class="akari-markdown download-link-button">Lanzou (Passcode: miku)</a>  
    <a target="_blank" href="https://github.com/LeagueAkari/LeagueAkari/releases/download/v1.4.3/League.Akari-1.4.3-win.7z" class="akari-markdown download-link-button">GitHub Download</a>
  </div>
</div>

# v1.4.3 (2026-01-22)

v1.4.3, primarily focused on bug fixes, with some minor feature updates.

## 1. New Features

- Added augments tier data for ARAM: Mayhem champions in the OP.GG mini window.

## 2. Bug Fixes

- Fixed an issue with incorrect time calculation in the automatic champion selection/ban feature. The time will now always be limited to the available time within the current phase.

- Fixed an issue where the win rate could not be displayed correctly on the match page in certain cases.

- Fixed an issue with incorrect premade detection, which could incorrectly identify some previously played players as premades.

- Fixed an issue where the "Ignore this update" feature was not working.

## 3. Adjustments

- The extraction process for automatic updates is now handled by the auto-updater instead of the application itself.

- Announcements will now pop up a small popover to preview the core content.

- In the Arena mode on the match history card, a "Gold" column will now be displayed.

- Added more methods to ensure the availability of the automatic update system.

## 4. Disclaimer

This software is a tool developed based on Riot's League Client Update (LCU) API. It does not use invasive technology and theoretically will not directly interfere with or modify game data. However, please note the possible compatibility issues or risks related to game updates or anti-cheat systems.

Furthermore, this application is not officially supported or endorsed by Riot Games, and Riot Games reserves all rights. Use this application at your own risk, as it may violate the game's terms of service.

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
