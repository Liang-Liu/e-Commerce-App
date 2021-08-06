import React from "react";

function CartCell({ cartItemData, removeFromCartFunc }) {
	const { item, count } = cartItemData;
	const { id, image, title, description, availableSizes, price } = item;

	return (
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
						removeFromCartFunc(cartItemData);
					}}
				>
					Remove
				</button>
			</div>
		</div>
	);
}

export default CartCell;
