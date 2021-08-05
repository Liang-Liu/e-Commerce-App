import React from "react";

function ProductCell({
	cellData: { id, image, title, description, availableSizes, price },
}) {
	return (
		<div className="productCell-container">
			<img className="product" src={image} alt="id" />
			<div className="title">{title}</div>
			<div className="price">${price}</div>
			<button className="addToCart">Add To Cart</button>
		</div>
	);
}

export default ProductCell;
