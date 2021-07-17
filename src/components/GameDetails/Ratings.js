import React from "react";
import styled from "styled-components";
import Stars from "../Stars";

const Ratings = ({ rating }) => {
	return (
		<StyledRatings>
			<SectionHeading>Ratings</SectionHeading>
			<Rating>
				<p>Graphics</p>
				<Score>
					<RatingText>{rating.graphics} / 5</RatingText>
					<Stars rating={rating.graphics} />
				</Score>
			</Rating>
			<Rating>
				<p>Story</p>
				<Score>
					<RatingText>{rating.story} / 5</RatingText>
					<Stars rating={rating.story} />
				</Score>
			</Rating>
			<Rating>
				<p>Gameplay</p>
				<Score>
					<RatingText>{rating.gameplay} / 5</RatingText>
					<Stars rating={rating.gameplay} />
				</Score>
			</Rating>
		</StyledRatings>
	);
};

const StyledRatings = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	@media (max-width: 780px) {
		flex-direction: column;
		text-align: center;
		row-gap: 0.3rem;
		padding-left: 0;
	}
`;

const SectionHeading = styled.h2`
	display: grid;
	align-items: center;
	grid-gap: 20px;
	font-size: 2rem;
	text-align: center;
	grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr);
	margin: 1rem 0rem;
	&:before {
		content: "";
		border-top: 3px solid #cccecd;
		border-radius: 5px;
	}
	&:after {
		content: "";
		border-top: 3px solid #cccecd;
		border-radius: 5px;
	}
`;

const Rating = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	p {
		font-size: 1.2rem;
	}
`;

const RatingText = styled.p`
	font-size: 1.2rem;
	color: #8a8a8a;
`;

const Score = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
`;

export default Ratings;
