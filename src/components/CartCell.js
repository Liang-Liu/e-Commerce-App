import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartAction } from "../actions/action";

function CartCell({ cartItemData }) {
	const dispatch = useDispatch();

	const { item, count } = cartItemData;
	const { id, image, title, description, availableSizes, price } = item;

	return (
		<>
			<div className="cartCell-container">
				<div className="cellImage">
					<img className="product-cell" src={image} alt="id" />
				</div>
				<div className="cartCellText">
					<div className="title-cell">{title}</div>
					<div className="price-cell">
						${price} X {count}
					</div>

					<button
						className="remove"
						onClick={(e) => {
							dispatch(removeFromCartAction(cartItemData));
						}}
					>
						Remove
					</button>
				</div>
			</div>
		</>
	);
}

export default CartCell;
