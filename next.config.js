const withImages = require("next-images");

module.exports = withImages({
	inlineImageLimit: false,
	esModule: true,
	async redirects() {
		return [
			{
				source: "/with-locale", // automatically handles all locales
				destination: "/another", // automatically passes the locale on
				permanent: false,
			},
			{
				// does not handle locales automatically since locale: false is set
				source: "/nl/with-locale-manual",
				destination: "/nl/another",
				locale: false,
				permanent: false,
			},
			{
				// this matches '/' since `en` is the defaultLocale
				source: "/en",
				destination: "/en/another",
				locale: false,
				permanent: false,
			},
		];
	},
});
