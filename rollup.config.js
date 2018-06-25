/**
 * Rollup configuration.
 * NOTE: This is a CommonJS module so it can be imported by Karma.
 */

const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

const getBundleConfig = function(src, dest) {
    return {
        input: src,
        plugins: [
            resolve({
                // use "module" field for ES6 module if possible
                module: true, // Default: true

                // use "jsnext:main" if possible
                // – see https://github.com/rollup/rollup/wiki/jsnext:main
                jsnext: false,

                // use "main" field or index.js, even if it's not an ES6 module
                // (needs to be converted from CommonJS to ES6
                // – see https://github.com/rollup/rollup-plugin-commonjs
                main: false,  // Default: true

                // some package.json files have a `browser` field which
                // specifies alternative files to load for people bundling
                // for the browser. If that's you, use this option, otherwise
                // pkg.browser will be ignored
                browser: false  // Default: false
            }),
            commonjs(),
            buble({
                objectAssign: 'Object.assign',
                transforms: {
                    dangerousForOf: true
                }
            })
        ],
        output: {
            name: 'wdfnviz_bundle',
            file: dest,
            format: 'iife',
            sourcemap: 'inline'
        }
    };
};

module.exports = getBundleConfig('test/js/bundles/');
