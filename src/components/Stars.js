import React from "react";
import styled from "styled-components";
import fullStarIcon from "../images/full-star.svg";
import emptyStarIcon from "../images/empty-star.svg";

const Stars = ({ rating }) => {
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

	return <StyledStars>{getStars(rating)}</StyledStars>;
};

const StyledStars = styled.div`
	display: flex;
	user-select: none;
	img {
		width: 25px;
		height: 25px;
	}
`;

export default Stars;
