import React from "react";
import styled from "styled-components";
import fullStarIcon from "../img/full-star.svg";
import emptyStarIcon from "../img/empty-star.svg";

const Game = ({ name, rating }) => {
	const overAllStars = (rating.graphics + rating.gameplay + rating.story) / 3;

	const getStars = (rating) => {
		let stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= Math.floor(rating)) {
				stars.push(<img alt="" key={i} src={fullStarIcon}></img>);
			} else {
				stars.push(<img alt="" key={i} src={emptyStarIcon}></img>);
			}
		}
		return stars;
	};

	return (
		<StyledGame>
			<h2>{name}</h2>
			<OverAllRating>
				<RatingText>{Math.floor(overAllStars)}/5</RatingText>
				<Stars>{getStars(overAllStars)}</Stars>
			</OverAllRating>
		</StyledGame>
	);
};

const StyledGame = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem;
	color: #333534;
	width: 100%;
	border-radius: 10px;
	&:hover {
		box-shadow: -5px -5px 15px 0 #fff, 5px 5px 15px 0 rgba(0, 0, 0, 0.11);
	}
	@media (max-width: 780px) {
		flex-direction: column;
		text-align: center;
		row-gap: 0.3rem;
	}
`;

const RatingText = styled.p`
	font-size: 1.3rem;
	color: #8a8a8a;
`;

const Stars = styled.div`
	display: flex;
	pointer-events: none;
	user-select: none;
`;

const OverAllRating = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
	img {
		width: 25px;
		height: 25px;
	}
`;

export default Game;
