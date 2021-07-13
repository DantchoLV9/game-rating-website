module.exports = {
	siteMetadata: {
		siteUrl: "https://gamer8.dantcho.com",
		title: "GameR8",
	},
	plugins: [
		"gatsby-plugin-styled-components",
		{
			resolve: "gatsby-source-filesystem",
			options: { name: "content", path: `${__dirname}/content/` },
		},
		"gatsby-transformer-remark",
	],
};
