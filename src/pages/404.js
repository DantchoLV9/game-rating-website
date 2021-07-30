import * as React from "react";
import Layout from "../components/Layout";
import StyledLink from "../components/StyledLink";
import styled from "styled-components";

const NotFoundPage = () => {
	return (
		<Layout pageTitle="Not found">
			<NotFoundSection>
				<h1>Page not found</h1>
				<p>
					Sorry{" "}
					<span role="img" aria-label="Pensive emoji">
						😔
					</span>{" "}
					we couldn’t find what you were looking for.
					<br />
					<br />
					<StyledLink to="/">Go home</StyledLink>.
				</p>
			</NotFoundSection>
		</Layout>
	);
};

const NotFoundSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 50%;
	margin: auto;
	color: ${(props) => props.theme.fg};
	a {
		text-decoration: underline;
	}
	p {
		font-size: 1.2rem;
	}
	h1 {
		margin-bottom: 2rem;
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

export default NotFoundPage;
