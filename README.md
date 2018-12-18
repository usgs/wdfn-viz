# WMA Water Data for the Nation USGS visual identity package

[![Build Status](https://travis-ci.org/usgs/wdfn-viz.svg?branch=master)](https://travis-ci.org/usgs/wdfn-viz)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6faaca8b97f34929b141c4444d919e4e)](https://www.codacy.com/app/usgs_wma_dev/wdfn-viz?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=usgs/wdfn-viz&amp;utm_campaign=Badge_Grade)

Provides Sass stylesheets and images that can be used when creating web pages that need to
meet USGS visual identity standards. The stylesheets use USWDS (https://designsystem.digital.gov/)
as the basis so all USWDS components are available.

## Usage

The repo can be installed in an existing project by installing via npm.

```bash
npm install wdfn-viz
```

To install the latest development snapshot (containing the current state of the master branch):

```bash
npm install wdfn-viz@snapshot
```

The main Sass stylesheet that should be imported into a web page's Sass file and is at /src/stylesheets/wdfnviz.scss.
This directory should be specified on the --include-path option when the site's Sass is built. This will also include
the USWDS style sheets so a separate import is not required. When building the style sheets the css should also be
processed by postcss as follows:

```
% node-sass --include-path node_modules/wdfn-via/src/stylesheets src/styles.main.css dist/main.css
% postcss dist/main.css --no-map --use autoprefixer -o dist/main.css
```

When building the assets, the images should be collected in a common directory and specified in the project's Sass
files using the $image-path variable. This should include the images in src/img that provide the USGS favicon and
logos. If using USWDS images those will also need to be collected. The images include a usgs_favicon.ico that can be used
for the page's favicon by adding the following line within the <head> section:
```
<link rel="shortcut icon" type="image/ico" href="{{ url for 'img/usgs_favicon.ico'}}">
```

Below are examples of commands that could be used to collect the assets.
```
% mkdir -p dist/img && cp -r node_modules/uswds/src/img/* dist/img && cp -r node_modules/wdfn-viz/src/img/* dist/img
% mkdir -p dist/fonts && cp node_modules/uswds/src/fonts/* dist/fonts
```

The javascript can be imported and provides USWDS javascript as well as the ability to log unhandled exceptions to
Google Analytics if window.ga is defined.

Example html templates for the header and footer can be found here: ```src/templates```. To implement the header
and footers add the markup in those templates to your pages, adjusting the image url in the header.html template
as needed for the USGS logo and federal government logos.

## Publishing to npm

TravisCI is configured to publish to the [wdfn-viz](https://www.npmjs.com/package/wdfn-viz) npm package when commits are made to the master branch.

To make a release, merge a commit that sets the
[version attribute in package.json](https://github.com/usgs/wdfn-viz/blob/master/package.json#L3) to the appropriate
value. When merging work that is not intended for release, append `-snapshot` to the upcoming version. Snapshot
releases will be tagged in the form `0.1.10-snapshot.6738b77`, where `6738b77` is the corresponding git commit.
