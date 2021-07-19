import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "./Image";

const Gallery = ({ pictures, alt }) => {
	return (
		<>
			<SectionHeading text="Pictures" />
			{pictures.map((picture) => (
				<Image key={picture.id} image={picture} alt={alt} />
			))}
		</>
	);
};

export default Gallery;
