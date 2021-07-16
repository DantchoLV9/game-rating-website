import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Image = ({ image, alt }) => {
	return <StyledImage image={getImage(image)} alt={alt} />;
};

const StyledImage = styled((props) => <GatsbyImage {...props} />)`
	margin-top: 1rem;
	border-radius: 10px;
`;

export default Image;
