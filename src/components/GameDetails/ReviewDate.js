import React from "react";
import styled from "styled-components";

const ReviewDate = ({ reviewDate }) => {
	return (
		<StyledReviewDate>
			<p>Review Date: {reviewDate}</p>
		</StyledReviewDate>
	);
};

const StyledReviewDate = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 0.4rem;
`;

export default ReviewDate;
