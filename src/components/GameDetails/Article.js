import React from "react";
import styled from "styled-components";
import SectionHeading from "./SectionHeading";

const Article = ({ html }) => {
	return (
		<StyledArticle>
			<SectionHeading text="Article" />
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</StyledArticle>
	);
};

const StyledArticle = styled.div`
	margin-bottom: 1rem;
	h3 {
		font-size: 1.5rem;
		margin-bottom: 1.2rem;
	}
	p {
		font-size: 1.2rem;
		margin-bottom: 0.8rem;
		:last-child {
			margin-bottom: 0;
		}
	}
	a {
		text-decoration: underline;
		color: inherit;
	}
`;

export default Article;
