import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ gameSEO, gameNode }) => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					siteUrl
				}
			}
		}
	`);
	let title;
	let description;
	if (gameSEO) {
		title = `${gameNode.frontmatter.title} | GameR8`;
		description = `A review of ${gameNode.frontmatter.title} by Yordan Hristov.`;
	} else {
		title = "GameR8";
		description = "Game reviews by Yordan Hristov.";
	}
	return (
		<Helmet>
			<meta name="description" content={description} />
			<meta property="og:type" content={gameSEO ? "article" : "website"} />
			<meta
				property="og:url"
				content={
					gameSEO
						? data.site.siteMetadata.siteUrl + gameNode.fields.slug
						: data.site.siteMetadata.siteUrl
				}
			/>
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{gameSEO && (
				<meta
					property="og:image"
					content={
						data.site.siteMetadata.siteUrl +
						gameNode.frontmatter.images.mainImage.publicURL
					}
				/>
			)}
			<meta property="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:url"
				content={
					gameSEO
						? data.site.siteMetadata.siteUrl + gameNode.fields.slug
						: data.site.siteMetadata.siteUrl
				}
			/>
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{gameSEO && (
				<meta
					name="twitter:image"
					content={
						data.site.siteMetadata.siteUrl +
						gameNode.frontmatter.images.mainImage.publicURL
					}
				/>
			)}
		</Helmet>
	);
};

export default Seo;
