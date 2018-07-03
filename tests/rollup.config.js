import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'tests/**/*-test.js',
  external: ['ava', 'fs', 'path'],
  plugins: [multiEntry(), resolve(), commonjs()],

  output: {
    file: 'build/bundle-test.js',
    format: 'cjs',
    sourcemap: true
  }
};
