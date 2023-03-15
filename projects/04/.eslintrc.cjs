module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:prettier/recommended'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			tsx: true,
		},
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-unused-vars': ['error', { args: 'none' }],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};
