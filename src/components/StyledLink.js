import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = ({ to, children }) => {
	return <StyledLinkElement to={to}>{children}</StyledLinkElement>;
};

const StyledLinkElement = styled((props) => <Link {...props} />)`
	text-decoration: none;
	color: inherit;
	width: 100%;
`;

export default StyledLink;
