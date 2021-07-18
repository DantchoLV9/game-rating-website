import React from "react";
import styled from "styled-components";
import Stars from "../Stars";

const GameHeader = ({ gameTitle, overAllRating }) => {
	return (
		<StyledGameHeader>
			<GameTitle>{gameTitle}</GameTitle>
			<OverallScore>
				<RatingText>
					{Math.round((overAllRating + Number.EPSILON) * 100) / 100} / 5
				</RatingText>
				<Stars rating={overAllRating} />
			</OverallScore>
		</StyledGameHeader>
	);
};

const StyledGameHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
	@media (max-width: 780px) {
		flex-direction: column;
		text-align: center;
		row-gap: 0.3rem;
		padding-left: 0;
	}
`;

const GameTitle = styled.h1`
	text-align: center;
`;

const OverallScore = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
`;

const RatingText = styled.p`
	font-size: 1.3rem;
	color: #525252;
`;

export default GameHeader;
