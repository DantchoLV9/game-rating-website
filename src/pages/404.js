import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
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
					<Link to="/">Go home</Link>.
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
	@media (max-width: 1600px) {
		width: 65%;
	}

	@media (max-width: 1300px) {
		width: 80%;
	}

	@media (max-width: 780px) {
		width: 100%;
	}
	h1 {
		margin-bottom: 2rem;
	}
`;

export default NotFoundPage;
