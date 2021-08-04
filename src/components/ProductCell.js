import React from "react";

function ProductCell({
	cellData: { id, image, title, description, availableSizes, price },
}) {
	return (
		<div>
			{title}

			<img src={image} alt="id" />
		</div>
	);
}

export default ProductCell;

