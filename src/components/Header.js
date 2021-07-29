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
	color: ${(props) => props.theme.fg};
	@media (max-width: 475px) {
		margin-bottom: 0.5rem;
	}
`;

export default Header;
