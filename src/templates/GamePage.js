import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Ratings from "../components/GameDetails/Ratings";
import Stars from "../components/Stars";

const GamePage = ({ data }) => {
	const game = data.markdownRemark;
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
				<Ratings rating={game.frontmatter.rating} />
				<SectionHeading>Article</SectionHeading>
				<div dangerouslySetInnerHTML={{ __html: game.html }} />
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
	margin-bottom: 1rem;
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
