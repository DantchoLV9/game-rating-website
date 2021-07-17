import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Ratings from "../components/GameDetails/Ratings";
import Stars from "../components/Stars";
import Image from "../components/Image";
import Gallery from "../components/Gallery";

const GamePage = ({ data }) => {
	const game = data.markdownRemark;
	const mainImage = game.frontmatter.images.mainImage;
	const galleryImages = game.frontmatter.images.galleryImages;

	const overAllStars =
		(game.frontmatter.rating.graphics +
			game.frontmatter.rating.gameplay +
			game.frontmatter.rating.story) /
		3;
	return (
		<Layout
			pageTitle={`${data.site.siteMetadata.title} | ${game.frontmatter.title}`}
		>
			<GameDetails>
				<GameHeader>
					<GameTitle>{game.frontmatter.title}</GameTitle>
					<OverallScore>
						<RatingText>
							{Math.round((overAllStars + Number.EPSILON) * 100) / 100} / 5
						</RatingText>
						<Stars rating={overAllStars} />
					</OverallScore>
				</GameHeader>
				{mainImage && <Image image={mainImage} alt={game.frontmatter.title} />}
				<Ratings rating={game.frontmatter.rating} />
				<SectionHeading>Article</SectionHeading>
				<div dangerouslySetInnerHTML={{ __html: game.html }} />
				{galleryImages && (
					<>
						<SectionHeading>Pictures</SectionHeading>
						<Gallery pictures={galleryImages} alt={game.frontmatter.title} />
					</>
				)}
			</GameDetails>
		</Layout>
	);
};

const GameDetails = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 50%;
	margin: auto;
	color: #333534;
	@media (max-width: 1300px) {
		width: 80%;
	}

	@media (max-width: 780px) {
		width: 100%;
	}
`;

const GameHeader = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 780px) {
		flex-direction: column;
		text-align: center;
		row-gap: 0.3rem;
		padding-left: 0;
	}
`;

const OverallScore = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
`;

const RatingText = styled.div`
	font-size: 1.3rem;
	color: #8a8a8a;
`;

const GameTitle = styled.h1`
	text-align: center;
`;

const SectionHeading = styled.h2`
	display: grid;
	align-items: center;
	grid-gap: 20px;
	font-size: 2rem;
	text-align: center;
	grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr);
	margin: 1rem 0rem;
	&:before {
		content: "";
		border-top: 3px solid #cccecd;
		border-radius: 5px;
	}
	&:after {
		content: "";
		border-top: 3px solid #cccecd;
		border-radius: 5px;
	}
`;

export const query = graphql`
	query ($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				rating {
					gameplay
					graphics
					story
				}
				images {
					mainImage {
						childImageSharp {
							gatsbyImageData
						}
					}
					galleryImages {
						childImageSharp {
							gatsbyImageData
						}
						id
					}
				}
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default GamePage;
