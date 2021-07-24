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
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/favicon.png",
			},
		},
		"gatsby-transformer-remark",
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
