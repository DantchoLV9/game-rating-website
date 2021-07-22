import React, { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useKeypress from "../../hooks/useKeypress";
import styled from "styled-components";

const Image = ({ image, alt }) => {
	const [imageModalState, setImageModelState] = useState(false);

	const openImageModalHandler = () => {
		document.body.style.overflow = "hidden";
		setImageModelState(true);
	};

	const closeImageModalHandler = (e) => {
		if (e !== undefined) {
			if (e.target.classList.contains("background")) {
				document.body.style.overflow = "auto";
				setImageModelState(false);
			}
		} else {
			document.body.style.overflow = "auto";
			setImageModelState(false);
		}
	};

	useEffect(() => {
		return closeImageModalHandler();
	}, []);

	useKeypress("Escape", closeImageModalHandler);

	return (
		<>
			<span
				onKeyPress={(event) => event.key === "Enter" && openImageModalHandler}
				role="button"
				tabIndex={-1}
				onClick={openImageModalHandler}
			>
				<StyledImage image={getImage(image)} alt={alt} />
			</span>

			{imageModalState && (
				<ImageModalBackground
					className="background"
					onClick={closeImageModalHandler}
				>
					<ModalImage image={getImage(image)} alt={alt} />
				</ImageModalBackground>
			)}
		</>
	);
};

const StyledImage = styled((props) => <GatsbyImage {...props} />)`
	margin-bottom: 1rem;
	border-radius: 10px;
	cursor: pointer;
`;

const ImageModalBackground = styled.div`
	width: 100%;
	padding: 0rem 5rem;
	min-height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	@media (max-width: 780px) {
		padding: 0rem 2rem;
	}
`;

const ModalImage = styled((props) => <GatsbyImage {...props} />)`
	border-radius: 10px;
	max-width: 100%;
	cursor: default;
`;

export default Image;
