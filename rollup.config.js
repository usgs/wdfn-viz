/**
 * Rollup configuration.
 * NOTE: This is a CommonJS module so it can be imported by Karma.
 */

const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

const pkg = require('./package.json');

module.exports = {
    input: 'src/js/main.js',
    plugins: [
        resolve({
            mainFields: ['module']
        }),
        commonjs(),
        buble({
            objectAssign: 'Object.assign',
            transforms: {
                dangerousForOf: true
            }
        })
    ],
    output: [{
        file: pkg.main,
        name: 'wdfnviz_bundle',
        format: 'iife',
        sourcemap: 'inline'
    }, {
        file: pkg.module,
        format: 'es',
        sourcemap: true
    }]
};
