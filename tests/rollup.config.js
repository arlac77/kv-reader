import babel from 'rollup-plugin-babel';

export default {
  input: 'tests/simple-test.js',
  external: ['ava'],

  plugins: [
    babel({
      babelrc: false,
      presets: [],
      exclude: 'node_modules/**'
    })
  ],

  output: {
    file: 'build/test-bundle.js',
    format: 'cjs',
    sourcemap: true
  }
};
