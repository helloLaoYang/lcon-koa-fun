
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import common from '@rollup/plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

const uglifyJs = function (options = {}) {
  return uglify(options)
}

const plugins = [
  json(),
  typescript(),
  resolve({
    preferBuiltins: false,
  }),
  common({
    extensions: ['.js', '.ts', '.mts'],
  }),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    uglifyJs()
  )
}

// rollup.config.js
export default {
  input: 'index.ts',
  plugins,
  external: [
    'path',
    'stream',
    'url',
    'http',
    'fs',
    'util',
    'events',
    'os',
    'querystring',
    'net',
    'tty',
    'crypto',
    'assert',
  ],
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
  },
}