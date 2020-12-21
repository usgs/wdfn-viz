/**
 * Rollup configuration.
 */

const buble = require('@rollup/plugin-buble');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');

const bubleConfig = require('./buble.config');

const pkg = require('./package.json');

module.exports = {
    input: 'src/js/main.js',
    plugins: [
        resolve.nodeResolve({
            mainFields: ['module']
        }),
        commonjs(),
        buble(bubleConfig)
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
