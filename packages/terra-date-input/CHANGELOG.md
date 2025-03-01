# Changelog

## Unreleased

## 1.36.0 - (March 29, 2023)

* Added
  * Added package-lock.json

## 1.35.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 1.34.1 - (March 29, 2022)

* Changed
  * Minor dependency version bump

## 1.34.0 - (March 15, 2022)



* Changed
  * Migrate docs to terra framework docs

## 1.33.0 - (March 1, 2022)

* Added
  * A11y improvements

## 1.32.1 - (February 15, 2022)

* Changed
  * Changed keyboard shortcuts to detect via `event.key` instead of `event.keyCode`.

## 1.32.0 - (January 4, 2022)

* Added
  * Added keyboard shortcuts `T`, `-`, and `+` for auto-setting date values.

## 1.31.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.
  * Fix to prevent non-numeric characters from being entered in Safari.
  * Check NODE_ENV for the current development environment.

## 1.30.0 - (July 21, 2021)

* Changed
  * Updated `terra-icon` from `v3.1.0` to `v3.19.0`.

## 1.29.0 - (July 20, 2021)

* Changed
  * Updated Jest Snapshots

## 1.28.0 - (June 8, 2021)

* Changed
  * Updated `keycode-js` from `v2.0.1` to `v3.1.0`.

## 1.27.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 1.26.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing

## 1.25.0 - (January 5, 2021)

* Changed
  * Updated to support a peer dependency of react-intl v2-v5
  * Updated `DateInputField` to use just `injectIntl` instead of `FormattedMessage` for react-intl v2-v5 compatibility

* Fixed
  * Fixed broken links in documentation.

## 1.24.0 - (November 24, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 1.23.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule
  * Restricted year input to be between `1900` and `2100`.
  * Allow users to clear month value by selecting placeholder option value.

## 1.22.0 - (October 27, 2020)

* Fixed
  * Fixed description id's in DateInput for better accessibility.

## 1.21.0 - (October 13, 2020)

* Changed
  * Added documentation on mock for `uuid`.

## 1.20.0 - (October 6, 2020)

* Changed
  * Upgrade `form-input` dependency to `^4.4.0` and updated jests.

## 1.19.0 - (September 29, 2020)

* Changed
  * Minor dependency version bump

## 1.18.0 - (September 16, 2020)

* Removed
  * Removed `placeholder` from day and year input.

* Changed
  * Updated month `placeholder` to be `- Select -`.
  * Fixed wrapping and applied truncation in month select.

* Added
  * Added format to be displayed for both `DateInput` and `DateInputField`.

## 1.17.0 - (August 18, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices.

* Changed
  * Updated Changelog format

## 1.16.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 1.15.0 - (July 14, 2020)

* Changed
  * Remove unused disable eslint directives

## 1.14.0 - (June 2, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 1.13.0 - (May 19, 2020)

* Fixed
  * Fixed `browser.execute` in tests to not use an arrow function since those are not supported by IE

## 1.12.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 1.11.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 1.10.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

* Changed
  * Update docs to use MDX syntax

## 1.9.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 1.8.0 - (December 10, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 1.7.0 - (November 26, 2019)

* Fixed
  * Fixed eslint error regarding operator-assignment.

## 1.6.0 - (November 7, 2019)

* Changed
  * Resolved lint warnings for multiple empty lines

## 1.5.0 - (October 30, 2019)

* Changed
  * Minor dependency updates

## 1.4.0 - (October 21, 2019)

* Changed
  * Reenabled some tests
  * Update Jest snapshots

## 1.3.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

* Added
  * Added `isIncomplete` prop and stylings
  * Added `required` prop
  * Added border css styles when `isInvalid` prop is provided

## 1.2.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 1.1.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 1.0.0 - (September 19, 2019)

* Initial stable release
