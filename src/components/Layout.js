import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "./Header";
import "../styles/global.css";

const Layout = ({ pageTitle, children }) => {
	return (
		<>
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
				{children}
			</StyledMain>
		</>
	);
};

const StyledMain = styled.main`
	padding: 3rem;
`;

export default Layout;
