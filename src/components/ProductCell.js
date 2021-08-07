import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions/action";

function ProductCell({ cellData, addToCartFunc }) {
	const dispatch = useDispatch();

	const { id, image, title, description, availableSizes, price } = cellData;

	return (
		<div className="productCell-container">
			<img className="product" src={image} alt="id" />
			<div className="title">{title}</div>
			<div className="price">${price}</div>
			<button
				className="addToCart"
				onClick={(e) => {
					dispatch(addToCartAction(cellData));
				}}
			>
				Add To Cart
			</button>
		</div>
	);
}

export default ProductCell;
