import React from "react";
import styled from "styled-components";

const SectionHeading = ({ text }) => {
	return <StyledSectionHeading>{text}</StyledSectionHeading>;
};

const StyledSectionHeading = styled.h2`
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

export default SectionHeading;
