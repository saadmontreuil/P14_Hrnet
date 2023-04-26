module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:cypress/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.ts'],
    },
    ],
    'react/prop-types': 'warn',
    // 'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'no-param-reassign': 0,
  },
};
