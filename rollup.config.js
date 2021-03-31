/**
 * Rollup configuration.
 */

const buble = require('@rollup/plugin-buble');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const {terser} = require('rollup-plugin-terser');

const bubleConfig = require('./buble.config');

const pkg = require('./package.json');

const env = process.env.NODE_ENV || 'development';

module.exports = {
    input: 'src/js/main.js',
    plugins: [
        resolve.nodeResolve({
            mainFields: ['module']
        }),
        commonjs(),
        buble(bubleConfig),
        env === 'production' && terser({
                compress: {
                    drop_console: true
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
