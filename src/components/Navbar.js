import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import HomeIcon from "../images/home-icon.js";
import AboutIcon from "../images/about-icon.js";
import SunIcon from "../images/sun-icon.js";
import MoonIcon from "../images/moon-icon.js";
import Search from "./Search";
import lightTheme from "../themes/light";
const searchIndices = [{ name: `Games`, title: `Games` }];

const Navbar = ({ currentTheme, switchThemeHandler }) => {
	return (
		<StyledNavbar>
			<StyledNavLinkElement to="/" activeClassName="active">
				<HomeIcon />
				Home
			</StyledNavLinkElement>
			<StyledNavLinkElement to="/about" activeClassName="active">
				<AboutIcon />
				About
			</StyledNavLinkElement>
			<AdditionalNavElements>
				<Search indices={searchIndices} />
				<ThemeButton onClick={switchThemeHandler}>
					{currentTheme === lightTheme ? (
						<MoonIcon fill={currentTheme.fg} />
					) : (
						<SunIcon fill={currentTheme.fg} />
					)}
				</ThemeButton>
			</AdditionalNavElements>
		</StyledNavbar>
	);
};

const StyledNavbar = styled.div`
	width: 50%;
	margin: auto;
	margin-bottom: 1.5rem;
	color: ${(props) => props.theme.fg};
	display: flex;
	justify-content: space-between;
	column-gap: 0.5rem;
	.active {
		background: ${(props) => props.theme.buttonBG};
		border: 2px solid ${(props) => props.theme.border};
		color: ${(props) => props.theme.buttonText};
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

	@media (max-width: 475px) {
		row-gap: 0.2rem;
		flex-direction: column-reverse;
		margin-bottom: 1rem;
		a:nth-child(1) {
			order: -1;
		}
		a:nth-child(2) {
			order: -2;
		}
	}
`;

const AdditionalNavElements = styled.div`
	display: flex;
	flex-grow: 1;
	column-gap: 0.5rem;
	justify-content: flex-end;
	@media (max-width: 475px) {
		flex-direction: row-reverse;
	}
`;

const ThemeButton = styled.div`
	display: flex;
	align-items: center;
	padding: 0 0.5rem;
	cursor: pointer;
	svg {
		width: 20px;
		height: 20px;
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
	transition: 150ms;
	svg {
		width: 20px;
		height: 20px;
		margin-right: 0.5rem;
	}
	:hover {
		background: ${(props) => props.theme.buttonBG};
		border: 2px solid ${(props) => props.theme.border};
		color: ${(props) => props.theme.buttonText};
	}
	@media (max-width: 475px) {
		width: 100%;
		justify-content: center;
	}
`;

export default Navbar;
