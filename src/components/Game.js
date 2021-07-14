import React, { useState } from "react";
import styled from "styled-components";
import fullStarIcon from "../img/full-star.svg";
import emptyStarIcon from "../img/empty-star.svg";

const Game = ({ name, rating }) => {
	const [statsState, setStatsState] = useState(false);
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
		<StyledGame onClick={() => setStatsState(!statsState)}>
			<MainGameData>
				<h2>{name}</h2>
				<OverAllRating>
					<RatingText>{Math.floor(overAllStars)}/5</RatingText>
					<Stars>{getStars(overAllStars)}</Stars>
				</OverAllRating>
			</MainGameData>
			{statsState && (
				<GameDetails>
					<Detail>
						<p>Graphics</p>
						<DetailRating>
							<RatingText>{Math.floor(rating.graphics)}/5</RatingText>
							<Stars>{getStars(rating.graphics)}</Stars>
						</DetailRating>
					</Detail>
					<Detail>
						<p>Story</p>
						<DetailRating>
							<RatingText>{Math.floor(rating.story)}/5</RatingText>
							<Stars>{getStars(rating.story)}</Stars>
						</DetailRating>
					</Detail>
					<Detail>
						<p>Gameplay</p>
						<DetailRating>
							<RatingText>{Math.floor(rating.gameplay)}/5</RatingText>
							<Stars>{getStars(rating.gameplay)}</Stars>
						</DetailRating>
					</Detail>
				</GameDetails>
			)}
		</StyledGame>
	);
};

const StyledGame = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	color: #333534;
	width: 100%;
	border-radius: 10px;
	cursor: pointer;
	&:hover {
		box-shadow: -5px -5px 15px 0 #fff, 5px 5px 15px 0 rgba(0, 0, 0, 0.11);
	}
	@media (max-width: 780px) {
		row-gap: 1rem;
	}
`;

const MainGameData = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	@media (max-width: 780px) {
		flex-direction: column;
		text-align: center;
		row-gap: 0.3rem;
	}
`;

const GameDetails = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	padding-left: 2rem;
	@media (max-width: 780px) {
		flex-direction: column;
		text-align: center;
		row-gap: 0.3rem;
		padding-left: 0;
	}
`;

const Detail = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	p {
		font-size: 1.2rem;
	}
`;

const DetailRating = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
	img {
		width: 25px;
		height: 25px;
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
