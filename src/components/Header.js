import React from "react";
import styled from "styled-components";
import StyledLink from "./StyledLink";

const Header = ({ title }) => {
	return (
		<StyledLogo>
			<StyledLink to="/">{title}</StyledLink>
		</StyledLogo>
	);
};

const StyledLogo = styled.h1`
	font-size: 5rem;
	font-weight: lighter;
	text-align: center;
	font-family: "Zen Tokyo Zoo", cursive;
	margin-bottom: 1.5rem;
	color: #333534;
`;

export default Header;
