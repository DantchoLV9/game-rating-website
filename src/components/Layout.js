import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "./Header";
import "../styles/global.css";

const Layout = ({ pageTitle, children }) => {
	return (
		<>
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			<StyledMain>
				<Header />
				{children}
			</StyledMain>
		</>
	);
};

const StyledMain = styled.main`
	height: 100vh;
	padding: 3rem;
`;

export default Layout;
