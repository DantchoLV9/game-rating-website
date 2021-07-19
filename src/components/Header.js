import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import StyledLink from "./StyledLink";

const Header = () => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<StyledLogo>
			<StyledLink to="/">{data.site.siteMetadata.title}</StyledLink>
		</StyledLogo>
	);
};

const StyledLogo = styled.h1`
	font-size: 5rem;
	font-weight: lighter;
	text-align: center;
	font-family: "Zen Tokyo Zoo", cursive;
	margin-bottom: 3rem;
	color: #333534;
`;

export default Header;
