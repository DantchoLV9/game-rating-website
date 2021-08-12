import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import SectionHeading from "../components/GameDetails/SectionHeading";

const ContactPage = () => {
	return (
		<Layout pageTitle="Contact">
			<Seo />
			<ContactSection>
				<SectionHeading text="Contact" />
				<form action="https://formspree.io/f/xyylbyby" method="POST">
					<div>
						<label htmlFor="email">Email</label>
						<input id="email" type="email" name="_replyto" required />
					</div>
					<div>
						<label htmlFor="name">Name</label>
						<input id="name" type="text" name="name" required />
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea id="message" rows="5" name="message" required />
					</div>
					<button type="submit">Send</button>
				</form>
			</ContactSection>
		</Layout>
	);
};

const ContactSection = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 50%;
	margin: auto;
	color: ${(props) => props.theme.fg};
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 0.5rem;
		width: 50%;
		margin: auto;
		font-size: 1.2rem;
		div {
			width: 100%;
		}
		input,
		textarea {
			width: 100%;
			outline: none;
			padding: 0.5rem;
			border-radius: 5px;
			font-size: 1.2rem;
			color: ${(props) => props.theme.buttonText};
			border: 2px solid ${(props) => props.theme.border};
			background: ${(props) => props.theme.buttonBG};
		}
		textarea {
			resize: vertical;
		}
		button {
			padding: 0.5rem 1rem;
			background: transparent;
			border: 2px solid transparent;
			border-radius: 5px;
			font-size: 1.2rem;
			color: ${(props) => props.theme.color};
			cursor: pointer;
			transition: 150ms;
			:hover {
				background: ${(props) => props.theme.buttonBG};
				border: 2px solid ${(props) => props.theme.border};
				color: ${(props) => props.theme.buttonText};
			}
		}
	}
	@media (max-width: 1600px) {
		width: 65%;
		form {
			width: 65%;
		}
	}

	@media (max-width: 1300px) {
		width: 80%;
		form {
			width: 80%;
		}
	}

	@media (max-width: 780px) {
		width: 100%;
		form {
			width: 100%;
		}
		row-gap: 1rem;
	}
`;

export default ContactPage;
