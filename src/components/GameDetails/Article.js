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
`;

export default Article;
