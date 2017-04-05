import { rollup } from 'rollup'
import postcss from 'rollup-plugin-postcss'
import json from 'rollup-plugin-json'
import eslint from 'rollup-plugin-eslint'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'

const pkg = require('./package.json')
const version = pkg.version
const date = new Date().toISOString().split('T')[0].replace(/\-/g, '')
const banner = `\
(this.nativeLog || function(s) {console.log(s)})('START WEEX PICKER: ${version} Build ${date}');
`

export default {
  entry: './src/index.js',
  dest: './dist/index.js',
  banner,
  format: 'umd',
  moduleName: 'WeexPicker',
  sourceMap: 'inline',
  plugins: [
    postcss(),
    json(),
    eslint({
      exclude: ['./package.json', '**/*.css']
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    buble()
  ]
}
