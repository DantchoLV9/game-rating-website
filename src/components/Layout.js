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
