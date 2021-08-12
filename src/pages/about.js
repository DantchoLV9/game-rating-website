import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SectionHeading from "../components/GameDetails/SectionHeading";
import PackageJson from "../../package.json";

const AboutPage = () => {
	return (
		<Layout pageTitle="About">
			<Seo />
			<AboutSection>
				<SectionHeading text="About" />
				<h3>The Content</h3>
				<p>
					The games on this website are rated by me,{" "}
					<a href="https://www.dantcho.com/">Yordan Hristov (Dantcho)</a>. None
					of the ratings are official and are just what I think about the games
					I've played.
				</p>
				<h3>The Website</h3>
				<p>
					The purpose of this website is for me to train using React and Gatsby.
					I'm not really focusing on the content of the website.
				</p>
				<p>
					The source code is on{" "}
					<a href="https://github.com/DantchoLV9/gamer8">Github</a>.
				</p>
				<p>Current Version: {PackageJson.version}</p>
				<h3>The Creator</h3>
				<p>
					My name is Yordan Hristov (Dantcho). I'm a web development student at
					Falmouth University. Currently focusing on front end web development &
					web design. Follow me on Twitter{" "}
					<a href="https://twitter.com/DantchoLV9">@DantchoLV9</a> if you want
					to know what I'm working on at the moment!
				</p>
			</AboutSection>
		</Layout>
	);
};

const AboutSection = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 50%;
	margin: auto;
	color: ${(props) => props.theme.fg};
	a {
		color: ${(props) => props.theme.fg};
	}
	h3 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}
	p {
		font-size: 1.2rem;
		margin-bottom: 1.5rem;
	}
	@media (max-width: 1600px) {
		width: 65%;
	}

	@media (max-width: 1300px) {
		width: 80%;
	}

	@media (max-width: 780px) {
		width: 100%;
		row-gap: 1rem;
	}
`;

export const query = graphql`
	query AboutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default AboutPage;
