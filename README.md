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

We recommend building the stylesheets with Dart sass (npm install sass).
The main Sass stylesheet that should be imported into a web page's Sass file and is at /src/stylesheets/wdfnviz.scss.
This will also include the USWDS style sheets so a separate import is not required.  This directory should be 
specified on the --load-path option along with the uswds/src/stylesheets when the site's Sass is built. When building 
the style sheets the css should also be processed by postcss using the autoprefixer and postcss-csso using a postcss.config.js file:
```javascript
const autoprefixerOptions = [
    '> 2%',
    'Last 2 versions',
    'IE 11',
    'not dead'
];

module.exports = ctx => ({
    map: Object.assign({}, ctx.options.map, {inline: false}),
    parser: ctx.options.parser,
    plugins: {
        autoprefixer: autoprefixerOptions,
        'postcss-csso': {
            forceMediaMerge: false
        }
    }
});
```
You may also want to include postcss-flexbugs-fixes plugin as is done for building wdfn-viz.

Below is an example of the process:
```
% sass --load-path node_modules/wdfn-viz/src/stylesheets --include-path node_modules/uswds/src/stylesheets src/styles.main.css dist/main.css
% postcss dist/main.css  -o dist/main.css
```

Postcss generates internal sourcemaps by default. You may want to consider using the --map option to create external map files
or if you want to minimize your css assets, you may want to disable entirely by using --no-map

When building the assets, the images should be collected in a common directory and specified in the project's Sass
files using the $theme-image-path variable. This should include the images in wdfn-viz/src/img that provide the USGS favicon and
logos. If using USWDS images those will also need to be collected. The images include a usgs_favicon.ico that can be used
for the page's favicon by adding the following line within the <head> section:
```
<link rel="shortcut icon" type="image/ico" href="{{ url for 'img/usgs_favicon.ico'}}">
```

The fonts should also be collected in a common directory and specified in the project's Sass files using the $theme-font-path
variable. Below are examples of commands that could be used to collect the image and font assets.
```
% mkdir -p dist/img && cp -r node_modules/uswds/src/img/* dist/img && cp -r node_modules/wdfn-viz/src/img/* dist/img
% mkdir -p dist/fonts && cp -r node_modules/uswds/src/fonts/* dist/fonts
```

The javascript should be imported and provides USWDS javascript as well as the ability to log unhandled exceptions to
Google Analytics if window.ga is defined. In order to use, a loading function should be defined which will be executed 
when the page loads. Below is a simple example:
```javascript
import wdfnviz from 'wdfn-viz';

const load = function () {
    null;  Add code that should get executed when the page is loaded
}

wdfnviz.main(load);


```

Example html templates for the header and footer can be found here: ```src/templates```. To implement the header
and footers add the markup in those templates to your pages, adjusting the image url in the header.html template
as needed for the USGS logo and federal government logos. This includes the script for ```uswds-init.min.js``` which should be retreived before the css files are loaded as is done in the example header.html.

## Using without building stylesheets and javascript bundling
You can use the prebuilt stylesheet and javascript bundle if desired. This can be done by including the following in your markup in the <head> section.
```
<link rel="stylesheet" href="wdfnviz.css">
<script src="wdfnviz.js"></script>
```

## Publishing to npm

TravisCI is configured to publish to the [wdfn-viz](https://www.npmjs.com/package/wdfn-viz) npm package when commits are made to the master branch.

To make a release, merge a commit that sets the
[version attribute in package.json](https://github.com/usgs/wdfn-viz/blob/master/package.json#L3) to the appropriate
value. When merging work that is not intended for release, append `-snapshot` to the upcoming version. Snapshot
releases will be tagged in the form `0.1.10-snapshot.6738b77`, where `6738b77` is the corresponding git commit.
