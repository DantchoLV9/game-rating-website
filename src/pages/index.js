import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Game from "../components/Game";
import styled from "styled-components";

const IndexPage = ({ data }) => {
	console.log(data);
	return (
		<Layout title={data.site.siteMetadata.title}>
			<StyledMainContainer>
				<StyledLogo>{data.site.siteMetadata.title}</StyledLogo>
				<StyledGamesList>
					{data.allMarkdownRemark.edges.map((data) => (
						<Game
							key={data.node.id}
							name={data.node.frontmatter.title}
							rating={data.node.frontmatter.rating}
						/>
					))}
				</StyledGamesList>
			</StyledMainContainer>
		</Layout>
	);
};

const StyledMainContainer = styled.div`
	height: 100vh;
	padding: 3rem;
`;

const StyledGamesList = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 50%;
	margin: auto;

	@media (max-width: 1300px) {
		width: 80%;
	}

	@media (max-width: 780px) {
		width: 100%;
		row-gap: 1rem;
	}
`;

const StyledLogo = styled.h1`
	font-size: 5rem;
	font-weight: lighter;
	text-align: center;
	font-family: "Zen Tokyo Zoo", cursive;
	margin-bottom: 3rem;
	color: #333534;
`;

export const query = graphql`
	query MainQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						rating {
							gameplay
							graphics
							story
						}
					}
					id
				}
			}
		}
	}
`;

export default IndexPage;
