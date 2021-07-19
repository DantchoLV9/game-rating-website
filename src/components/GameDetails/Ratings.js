import React from "react";
import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import Rating from "./Rating";

const Ratings = ({ rating }) => {
	return (
		<StyledRatings>
			<SectionHeading text="Ratings" />
			<Rating ratingName="Graphics" rating={rating.graphics} />
			<Rating ratingName="Story" rating={rating.story} />
			<Rating ratingName="Gameplay" rating={rating.gameplay} />
		</StyledRatings>
	);
};

const StyledRatings = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	margin-bottom: 1rem;
	@media (max-width: 780px) {
		flex-direction: column;
		text-align: center;
		row-gap: 0.3rem;
		padding-left: 0;
	}
`;

export default Ratings;
