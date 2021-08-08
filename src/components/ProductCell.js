import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions/action";
import Modal from "react-modal";

function ProductCell({ cellData, addToCartFunc }) {
	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();

	const handleShowModal = () => {
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

	const { id, image, title, description, availableSizes, price } = cellData;

	return (
		<div className="productCell-container">
			<div
				className="productModal"
				onClick={(e) => {
					handleShowModal();
				}}
			>
				<img className="product" src={image} alt="id" />
				<h4 className="title">{title}</h4>
			</div>
			<div className="price">${price}</div>
			<button
				className="addToCart"
				onClick={(e) => {
					dispatch(addToCartAction(cellData));
				}}
			>
				Add To Cart
			</button>

			<Modal isOpen={showModal} ariaHideApp={false}>
				<button
					onClick={(e) => {
						handleCloseModal();
					}}
				>
					Close Modal
				</button>
				<img className="product" src={image} alt="id" />
				<h5 className="title">{title}</h5>
				<p>{description}</p>
				<p>{availableSizes}</p>
				<h5 className="price">{price}</h5>
			</Modal>
		</div>
	);
}

export default ProductCell;
