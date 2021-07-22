import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ pageTitle, children }) => {
	return (
		<>
			<GlobalStyles />
			<Helmet
				htmlAttributes={{
					lang: "en",
				}}
			>
				<title>{pageTitle}</title>
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
			<StyledMain>
				<Header />
				<Navbar />
				{children}
			</StyledMain>
		</>
	);
};

const StyledMain = styled.main`
	padding: 3rem;
`;

export default Layout;
