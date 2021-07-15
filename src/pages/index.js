import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Game from "../components/Game";
import styled from "styled-components";

const IndexPage = ({ data }) => {
	return (
		<Layout pageTitle={`${data.site.siteMetadata.title}`}>
			<StyledGamesList>
				{data.allMarkdownRemark.edges.map((data) => (
					<StyledLink key={data.node.id} to={data.node.fields.slug}>
						<Game
							key={data.node.id}
							name={data.node.frontmatter.title}
							rating={data.node.frontmatter.rating}
						/>
					</StyledLink>
				))}
			</StyledGamesList>
		</Layout>
	);
};

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

const StyledLink = styled((props) => <Link {...props} />)`
	text-decoration: none;
	color: inherit;
	width: 100%;
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
					fields {
						slug
					}
				}
			}
		}
	}
`;

export default IndexPage;
