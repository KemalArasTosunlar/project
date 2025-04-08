const { transform } = require('@babel/core');

module.exports = {
  process(src, filename) {
    const result = transform(src, {
      filename,
      presets: [
        '@babel/preset-env',
        '@babel/preset-react', 
        '@babel/preset-typescript',
        '@babel/preset-flow'
      ],
      plugins: [
        '@babel/plugin-transform-flow-strip-types',
        '@babel/plugin-transform-modules-commonjs'
      ]
    });
    
    return {
      code: result ? result.code : src
    };
  }
};
