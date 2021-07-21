import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import homeIcon from "../images/home-icon.svg";

const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledNavLinkElement to="/" activeClassName="active">
				<img alt="home" src={homeIcon} />
				Home
			</StyledNavLinkElement>
		</StyledNavbar>
	);
};

const StyledNavbar = styled.div`
	width: 50%;
	margin: auto;
	margin-bottom: 1.5rem;
	color: #525252;
	.active {
		background: #faeaea;
		border: 2px solid #ffb9b9;
		color: #ff5959;
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

const StyledNavLinkElement = styled((props) => <Link {...props} />)`
	text-decoration: none;
	color: inherit;
	font-size: 1.2rem;
	display: inline-flex;
	justify-content: baseline;
	align-items: center;
	border: 2px solid transparent;
	border-radius: 10px;
	padding: 0.5rem;
	img {
		width: 20px;
		height: 20px;
		margin-right: 0.5rem;
	}
	:hover {
		background: #faeaea;
		border: 2px solid #ffb9b9;
		color: #ff5959;
	}
	@media (max-width: 475px) {
		width: 100%;
		justify-content: center;
	}
`;

export default Navbar;
