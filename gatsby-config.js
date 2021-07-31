require("dotenv").config();

module.exports = {
	siteMetadata: {
		siteUrl: "https://gamer8.dantcho.com",
		title: "GameR8",
	},
	plugins: [
		{
			resolve: "gatsby-source-filesystem",
			options: { name: "content", path: `${__dirname}/content/` },
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: `GameR8`,
				short_name: `GameR8`,
				start_url: `/`,
				background_color: `#242526`,
				theme_color: `#FF5959`,
				display: `standalone`,
				icon: "src/images/favicon.png",
				icon_options: {
					purpose: `any maskable`,
				},
			},
		},
		`gatsby-plugin-offline`,
		{
			resolve: "gatsby-plugin-algolia",
			options: {
				appId: process.env.GATSBY_ALGOLIA_APP_ID,
				apiKey: process.env.ALGOLIA_ADMIN_KEY,
				queries: require("./src/utils/algolia-queries"),
			},
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: "https://gamer8.dantcho.com",
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				excludes: ["/about"],
				query: `{
					site {
						siteMetadata {
							siteUrl
						}
					}
					allSitePage {
						nodes {
							path
							context {
							  	date
							}
						}
					}
				}`,
				resolvePages: ({ allSitePage: { nodes: allPages } }) => {
					return allPages.map((page) => {
						return { ...page };
					});
				},
				serialize: ({ path, context }) => {
					return {
						url: path,
						changefreq: "daily",
						priority: 0.7,
						lastmod: context.date,
					};
				},
			},
		},
		"gatsby-plugin-styled-components",
		"gatsby-transformer-remark",
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
