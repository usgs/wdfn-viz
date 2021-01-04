# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).
## 1.10.0 - 2021-01-04
- Updated index.html template to include the viewport meta tag. Fixed the footer to display the social media icons below the first set of footer links rather than float
left.

## 1.9.0 - 2020-12-21
- Updated to USWDS 2.10.0 - includes adding the uswds-init.min.js script to prevent banner flashing.
- Using Jest rather than Karma/Jasmine for the testing framework.

## 1.8.0 - 2020-10-22
- Updated to USWDS 2.9.0

## 1.7.1 - 2020-08-28
### Changed
- Updated to USWDS 2.8.1

## 1.7.0 - 2020-07-10
### Changed
- Updated to USWDS 2.8
- Updated header template (src/templates/header.html) to reflect new header guidance. See https://github.com/uswds/uswds/releases/tag/v2.8.0 and look for Updates to the banner. Users of this package will need to update their own templates.

## 1.6.2 - 2020-06-18
### Changed
- Updated USWDS to 2.7.1

## 1.6.0 - 2020-05-12
### Changed
- Updated USWDS to 2.7.0

## 1.5.0 - 2020-04-06
### Changed
- Updated USWDS to 2.6.0

## 1.4.0 - 2020-03-04
### Changed
- Updated USWDS to 2.5.1
- Updated header template to add ```aria-label="Official government website"``` to the top "usa-banner" section
- Updated footer template to add ```aria-label="Footer Navigation"``` to the usgs-footer-container and changed it to a nav element
- Using Dart Sass to compile the style sheets
- Using postcss-csso to minimize the style sheets
- Updated the .stylelintrc.json to use  the same as USWDS without the prettier plugin.

## 1.3.0 - 2019-12-20
### Changed
- Updated USWDS to 2.4.0

## 1.2.0 - 2019-12-02
### Changed
- Updated USWDS to 2.3.1
- Build process has been tested with nodejs 12.x

## 1.1.0 - 2019-10-04
### Changed
- Updated USWDS to 2.2.1 
- Removed unused dependencies and updated linting rules for scss to match USWDS.

### Fixed
- Remove obsolete sass variable from stylesheet

## 1.0.1
### Changed
- Build tooling dependencies updated to latest versions
- Updated USWDS to 2.0.3

## 1.0.0
### Changed
- Updated build USWDS to 2.0.1
- A git tag is created for each release