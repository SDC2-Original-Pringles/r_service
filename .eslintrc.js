module.exports = {
  env: {
    es6: true,
    'jest/globals': true,
  },
  parserOptions: { /* necessary otherwise lints all react jsx */
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['jest'],
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    camelcase: ['error', {
      allow: [
        'product_id',
        'default_price',
        'created_at',
        'updated_at',
        'question_id',
        'answer_id',
      ],
    }],
  },
};
