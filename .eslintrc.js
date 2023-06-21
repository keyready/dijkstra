module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/function-component-definition': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/no-array-index-key': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-underscore-dangle': 'off',
        'no-restricted-syntax': 'off',
        'guard-for-in': 'off',
        'import/no-unresolved': 'off',
        'no-param-reassign': 'off',
        'import/extensions': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-return-await': 'warn',
        'no-unused-vars': 'warn',
    },
};
