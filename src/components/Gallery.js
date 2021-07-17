import React from "react";
import Image from "./Image";
import styled from "styled-components";

const Gallery = ({ pictures, alt }) => {
	return (
		<StyledGallery>
			{pictures.map((picture) => (
				<Image key={picture.id} image={picture} alt={alt} />
			))}
		</StyledGallery>
	);
};

const StyledGallery = styled.div`
	margin-bottom: 5rem;
`;

export default Gallery;
