import React from "react";

function ProductCell({ cellData, addToCartFunc }) {
	const { id, image, title, description, availableSizes, price } = cellData;

	return (
		<div className="productCell-container">
			<img className="product" src={image} alt="id" />
			<div className="title">{title}</div>
			<div className="price">${price}</div>
			<button
				className="addToCart"
				onClick={(e) => {
					addToCartFunc(cellData);
				}}
			>
				Add To Cart
			</button>
		</div>
	);
}

export default ProductCell;
