module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: [
		"react",
	],
	rules: {
		quotes: ["error", "double"],
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		indent: ["error", "tab"],
		"no-tabs": 0,
		"react/jsx-indent": "off",
		"react/prop-types": "off",
		"no-mixed-spaces-and-tabs": 0,
	},
	globals: {
		React: "writable",
	},
	root: true,
};
