import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions/action";
import Modal from "react-modal";

function ProductCell({ cellData }) {
	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();

	const handleShowModal = () => {
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

	const { image, title, description, availableSizes, price } = cellData;

	return (
		<div className="productCell-container">
			<div
				className="productModal"
				onClick={() => {
					handleShowModal();
				}}
			>
				<img className="product" src={image} alt="id" />
				<h4 className="title">{title}</h4>
			</div>
			<div className="price">${price}</div>
			<button
				className="addToCart iconBtn"
				onClick={() => {
					dispatch(addToCartAction(cellData));
				}}
			>
				<i className="fas fa-cart-plus"></i>
			</button>

			<Modal isOpen={showModal} ariaHideApp={false}>
				<section>
					<button
						onClick={() => {
							handleCloseModal();
						}}
						className="iconBtn closeBtn"
					>
						<i className="far fa-window-close"></i>
					</button>
					<div className="productModalContent">
						<img className="productModal" src={image} alt="id" />
						<div className="modelText">
							<h3 className="title">{title}</h3>
							<p>{description}</p>
							{console.log(availableSizes)}
							<h3>Available Sizes: {availableSizes.join(", ")}</h3>
							<h3 className="price">Price: ${price}</h3>
						</div>
					</div>
				</section>
			</Modal>
		</div>
	);
}

export default ProductCell;
