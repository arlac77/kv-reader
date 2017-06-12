import babel from 'rollup-plugin-babel';

export default {
  format: 'cjs',
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
      exclude: 'node_modules/**'
    })
  ]
};
