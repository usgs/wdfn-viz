# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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