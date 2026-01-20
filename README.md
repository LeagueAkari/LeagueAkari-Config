# League Akari Config

Config Repository for League Akari.

## announcement

Announcement is a markdown file.

Filenames are in the format of `{language}.md`, and the language is the language of the announcement.

The FrontMatter (supported since v1.3.7) is the following:

- comment: The comment of the announcement. No meaning, just for older version.
- alertLevel: The alert level of the announcement. One of the following:
  - low: Low priority. No popup.
  - medium: Medium priority, displayed as a badge, and show the summary.
  - high: High priority, displayed as a popup.
- summary: The summary of the announcement. Supported since v1.4.3.

## config/{shard}/\*

Organized by different modules, each module is provided with remote configuration overlay to quickly respond to the latest changes without requiring updates.

## releases/{version}/{language}.md

This file is the description of the release in certain language.

It is a markdown file.

## releases/{version}/overrides.json

This file is used to override the default behavior of the release process.

It is a JSON file that contains the following fields:

- `version`: The version of the release. Start with `v`.
- `publishAt`: The date and time of the release. ISO 8601 format.
- `descriptions`: The description of the release in certain language. It's an object, the key is the language (e.g. `zh-CN`, `en`), and the value is the string description.
- `archiveFileGitee`: The archive file for the release in Gitee.
- `archiveFileGitHub`: The archive file for the release in GitHub.

Supported since v1.4.3.
