import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Navbar from "./Navbar";
import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";
import Footer from "./Footer";

const Layout = ({ pageTitle, children }) => {
	const [currentTheme, setCurrentTheme] = useState(darkTheme);
	useEffect(() => {
		if (localStorage.getItem("theme") === "light") {
			setCurrentTheme(lightTheme);
		} else {
			setCurrentTheme(darkTheme);
		}
	}, []);
	const switchThemeHandler = () => {
		if (currentTheme === lightTheme) {
			setCurrentTheme(darkTheme);
			localStorage.setItem("theme", "dark");
		} else {
			setCurrentTheme(lightTheme);
			localStorage.setItem("theme", "light");
		}
	};
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
		<>
			<Helmet
				htmlAttributes={{
					lang: "en",
				}}
			>
				<title>{`${pageTitle} | ${data.site.siteMetadata.title}`}</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Zen+Tokyo+Zoo&display=swap"
					rel="stylesheet"
				/>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-QPJVJF2T93"
				></script>
				<script>
					{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-QPJVJF2T93');`}
				</script>
			</Helmet>
			<ThemeProvider theme={currentTheme}>
				<GlobalStyles />
				<StyledMain>
					<Header title={data.site.siteMetadata.title} />
					<Navbar
						currentTheme={currentTheme}
						switchThemeHandler={switchThemeHandler}
					/>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						{children}
					</motion.div>
					<Footer />
				</StyledMain>
			</ThemeProvider>
		</>
	);
};

const StyledMain = styled.main`
	padding: 3rem;
`;

export default Layout;
