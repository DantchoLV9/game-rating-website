import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

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

const StyledLink = styled((props) => <Link {...props} />)`
	text-decoration: none;
	color: inherit;
`;

export default Header;
