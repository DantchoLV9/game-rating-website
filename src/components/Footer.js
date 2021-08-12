import React from "react";
import styled from "styled-components";
import StyledLink from "./StyledLink";

const Footer = () => {
	return (
		<StyledFooter>
			The images on this website are not owned by me. If you want an image
			removed please <StyledLink to="/contact">contact me</StyledLink>!
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	width: 50%;
	margin: auto;
	margin-top: 2rem;
	text-align: center;
	a {
		text-decoration: underline;
	}
	@media (max-width: 1600px) {
		width: 65%;
	}
	@media (max-width: 1300px) {
		width: 80%;
	}
	@media (max-width: 780px) {
		width: 100%;
	}
`;

export default Footer;
