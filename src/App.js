import ProductCell from "./components/ProductCell";
import FilterBar from "./components/FilterBar";
import CartCell from "./components/CartCell";
import OrderForm from "./components/OrderForm";
import { useDispatch, useSelector } from "react-redux";
import { proceedBtnAction } from "./actions/action";
import { useState, useEffect } from "react";
import Modal from "react-modal";
// import { fetchAction } from "./actions/action";

function App() {
	const state = useSelector((state) => state);
	console.log(state);

	// useEffect(() => {
	// 	dispatch(fetchAction());
	// }, []);
	const dispatch = useDispatch();
	const [showOrderConfirmationModal, setShowOrderConfirmationModal] =
		useState(false);

	const handleShowModal = () => {
		setShowOrderConfirmationModal(true);
	};
	const handleCloseModal = () => {
		setShowOrderConfirmationModal(false);
	};

	function countTotalPrice(arr) {
		let totalPrice = 0;
		arr.forEach((ele, idx) => {
			totalPrice += ele.item.price * ele.count;
		});
		return totalPrice;
	}

	return (
		<div className="gird-container">
			<nav>
				<h1>TrendyClothes</h1>
			</nav>
			<div className="content">
				<FilterBar />
				<main>
					{state.products.map((ele, idx) => {
						return <ProductCell key={ele.id} cellData={ele} />;
					})}
				</main>
				<div className="sidebar">
					shopping cart
					<h3>You have {state.cartItems.length} item in cart</h3>
					{state.cartItems.map((ele, idx) => {
						return <CartCell key={ele.item.id} cartItemData={ele} />;
					})}
					{state.cartItems.length !== 0 && (
						<>
							<div className="proceedSection">
								<h4>Total: $ {countTotalPrice(state.cartItems)}</h4>
								<button
									className="proceed"
									onClick={(e) => {
										dispatch(proceedBtnAction());
									}}
								>
									Proceed
								</button>
							</div>
							{state.showOrderForm && (
								<div className="orderForm">
									<OrderForm handleShowModalFunc={handleShowModal} />
								</div>
							)}
						</>
					)}
				</div>
			</div>
			<Modal isOpen={showOrderConfirmationModal} ariaHideApp={false}>
				<button
					onClick={(e) => {
						handleCloseModal();
					}}
				>
					Close Modal
				</button>
				<h1>Your Order Is Submitted Successfully! </h1>
			</Modal>
			<footer>
				<h5>Copyright © 2021</h5>
			</footer>
		</div>
	);
}

export default App;
