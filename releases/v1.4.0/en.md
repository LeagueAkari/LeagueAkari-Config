# v1.4.0 Akari (2025-12-25)

The spotlight fades — Akari~n! drifts away in silent yurayura.

---

## 1. New Features

### 1.1. New Match History Card

In version 1.4.0, the original match history display component has been refactored with a new match history card.

The new match history card strives for comprehensive information display, providing **detailed** data metrics of all kinds.

You can experience the following new features:

1. Overview table format data display adapted to various modes, including team total kills, gold, ban positions, and epic monster kills; player hexagon charts, champions, positions, augments, CS, and items, etc. Note that some columns require a larger window width to fully display.

2. Detailed data tables for each entry. Even including skill cast counts, signal send counts, jungle steals, and solo kill counts, etc. More details can be explored on your own.

3. You can now view the in-game event timeline. It records every champion kill, building destruction, and plate acquisition. Additionally, you can view the map location of each kill, as well as detailed damage dealt or received by related members.

4. Rune data statistics. You can now view rune usage statistics for all players to analyze the actual effects of different runes. You can view how much damage "Electrocute" dealt in this match, or how much cooldown reduction and damage boost "Axiom Arc" provided.

5. Item and skill builds are now viewable. You can now view everyone's skill point allocation and item purchase routes, which are listed in detail by time. Additionally, in Arena and ARAM: Mayhem, League Akari will also help you count how many times each player purchased the Anvil.

6. Line charts. As the name suggests, provides basic gold, CS, and experience timelines. By team or by player.

7. Match replay download. You can download replays for matches in the same region. This is a client-launching feature, so expired matches still cannot be watched.

> Detailed data highly depends on the SGP API, SGP support needs to be enabled (default).

Synchronously, the "Ongoing Game" page or other components that can preview match history all use this new match history card.

### 1.2. Light Mode Support

As a long-pending feature, it has finally been implemented. You can now switch to light mode through the **Light Mode** option in settings.

However, dark mode is still used by default. This is because client resources mostly use a dark theme, and its performance in light mode is actually not ideal.

### 1.3. More Complete Automated Selection Tools

In previous versions, automatic champion selection, ban, and swap functions did not distinguish between modes, and detail handling was not perfect.

Now, these features have been completely rewritten. You can precisely set the champions you want to automatically operate by mode and position (ranked queues), or enable automatic operation functions for a specific mode series separately.

At the same time, the timing of action execution under certain conditions has been adjusted. By default, the **Intent** → **Show** → **Lock** sequence will be used to make it more natural. The specific time intervals are controlled by settings.

> Due to significant changes in automatic selection features, existing settings cannot be migrated to the new version.

### 1.4. Refactored Summoner Search Interface

The **Search Player** feature in the title bar of the "Match History" main page has been improved. The original UI design has been completely abandoned, and a larger dialog box is now used for display.

Recent visits and friend lists are now placed separately on the left side, and a joint region reference is provided to quickly check which joint server your region belongs to.

When searching for players, the SGP API will be allowed, optimizing the search logic, with search speed increased by up to 1500%. Exact searches by name and tag will automatically query other available regions.

### 1.5. Ongoing Game in Lobby

In Settings → Ongoing Game → Enable in Lobby Phase, you can enable this feature.

After enabling, League Akari will query the match history or other data of all players in the lobby, just like in champion select or in-game.

### 1.6. Uninstall League Akari

In Settings → Application → Uninstall Application, an uninstall option is provided. This will completely delete League Akari and all its data, which cannot be recovered.

### 1.7. Other Minor Updates

See the "Adjustments" section.

## 2. Adjustments

While providing new features, we have also adjusted some internal functions of the software. The specific list includes but is not limited to the following.

- Background material supports Mica (Windows 11 only).
- Game Stream → Auto-reconnect feature, now increases reconnect delay (specifically, 10 seconds) to avoid the period when reconnection is not possible immediately after disconnection.
- OP.GG window, an option to permanently close this window is provided in settings. It is completely equivalent to the corresponding setting in main settings, only for user convenience.
- OP.GG window, now automatically cleans up previously created item sets at appropriate times.
- Provides a startup page when not connected or when the match history page is not created.
- Some settings can now load local presets or sync updated data from remote repositories.
- Settings related to SGP and LCU APIs in the match history page and ongoing game have been merged and moved to Settings → Application → Preferred Data Source. Default is SGP.
- A new feature is provided: Game Stream → Send Map Position Information. When in ARAM, ARAM: Mayhem, or URF, you can inform your team in advance whether you are on the Red/Blue side.
- Inference-based premade detection feature has returned. Plus, the threshold is now defaulted to 5 matches to reduce errors.
- The first launch disclaimer now provides a quick close option.
- In the "Automation" → "Misc" page, a feature has been added to schedule invitations to certain friends. These friends will be invited immediately when they can be invited.
- A simple search filter feature has been added to the friend tool.
- Cross-region match history queries will now explicitly prompt when rank cannot be queried.
- More exception detection mechanisms are provided, including SGP data source connection unavailable, or unable to query client command line.
- A content protection switch is provided, located in Settings → Misc → Content Protection. When enabled, League Akari will not appear in screen capture tools. (It will affect NVIDIA's recording feature, but will not affect other tools like OBS)
- Player cards on the ongoing game page will automatically adjust height within a certain range.
- Spectate feature adjustments. Due to Riot's changes to the spectate system, spectating arbitrary players is no longer possible. However, on some servers, it is still available, but highly dependent on the SGP API.
- "Auto Champion Config" will no longer conflict with OP.GG's auto settings.
- Since Microsoft has gradually deprecated WMIC in new versions, the client command line fallback has been migrated from WMIC to WMI API.
- New information completion feature. League Akari will collect additional data during champion select or in-game to complete missing information.

## 3. Bug Fixes

At the same time, some bugs have been fixed.

- Missing i18n entries have been completed. Raw text like `auto-champ-select.delayed-ban` will no longer appear.
- Some settings could not be synchronized across windows. Now they will be correctly synchronized.
- Spectate status will not incorrectly record player information.
- Flash positions D and F were reversed, now corrected.
- Previously, when calling WMIC resulted in an error, it would cause the entire application to crash. This has been properly handled.

Issues that have not been fixed yet will be gradually resolved in subsequent minor versions (v1.4.1+).

## 4. Others

### 4.1. Source Code Release Strategy

The development team has discovered that some individuals are repackaging League Akari's source code and adding membership systems to distribute and promote it in a **paid** form.

To avoid this phenomenon, the source code for the latest version will not be provided for now. Additionally, the released binary version has been added with integrity verification and bytecode encryption. This will not affect performance, only improving security.

The source code for this version will be provided after several versions.

### 4.2. Disclaimer

This software is a tool developed based on Riot's League Client Update (LCU) API. It does not use invasive technology and theoretically will not directly interfere with or modify game data. However, please note the possible compatibility issues or risks related to game updates or anti-cheat systems.

Furthermore, this application is not officially supported or endorsed by Riot Games, and Riot Games reserves all rights. Use this application at your own risk, as it may violate the game's terms of service.
