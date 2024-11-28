// eslint.config.js
module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {
    // Añadir reglas personalizadas si es necesario
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};
