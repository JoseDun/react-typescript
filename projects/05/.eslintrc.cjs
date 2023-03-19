module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:prettier/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'react-hooks', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-unused-vars': ['error', { args: 'none' }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};
