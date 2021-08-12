import ProductCell from "./components/ProductCell";
import FilterBar from "./components/FilterBar";
import CartCell from "./components/CartCell";
import OrderForm from "./components/OrderForm";
import { useDispatch, useSelector } from "react-redux";
import { proceedBtnAction } from "./actions/action";
import { useState } from "react";
import Modal from "react-modal";
// import { fetchAction } from "./actions/action";

function App() {
	const state = useSelector((state) => state);
	// useEffect(() => {
	// 	dispatch(fetchAction());
	// }, []);
	const dispatch = useDispatch();
	const [showOrderConfirmationModal, setShowOrderConfirmationModal] =
		useState(false);
	const [showCart, setShowCart] = useState(false);

	const handleShowModal = () => {
		setShowOrderConfirmationModal(true);
	};
	const handleCloseModal = () => {
		setShowOrderConfirmationModal(false);
	};

	function toggleCartClass() {
		setShowCart((prev) => !prev);
	}

	function countTotalPrice(arr) {
		let totalPrice = 0;
		arr.forEach((ele) => {
			totalPrice += ele.item.price * ele.count;
		});
		return totalPrice.toFixed(1);
	}

	return (
		<div className="gird-container">
			<nav>
				<a href="/">
					<h1 style={{ margin: "0.5rem" }}>TrendyClothes</h1>
				</a>
				<button id="cartBtn" onClick={() => toggleCartClass()}>
					<i className="fas fa-shopping-cart"></i>
				</button>
			</nav>
			<div className="content">
				<FilterBar />
				<main>
					{state.products.map((ele) => {
						return <ProductCell key={ele.id} cellData={ele} />;
					})}
				</main>
				<div className={`sidebar ${showCart ? "showCart" : ""}`}>
					<h3>Your Shopping Cart</h3>
					<h4 style={{ margin: 0 }}>{state.cartItems.length} items in cart</h4>
					<div className="cartCellsContainer">
						{state.cartItems.map((ele) => {
							return <CartCell key={ele.item.id} cartItemData={ele} />;
						})}
					</div>
					{state.cartItems.length !== 0 && (
						<>
							<div className="proceedSection">
								<h4>Total: $ {countTotalPrice(state.cartItems)}</h4>
								<div className="buttonInSidebar">
									<button
										className="proceed button button--pan"
										onClick={(e) => {
											dispatch(proceedBtnAction());
										}}
									>
										<span>Proceed Order</span>
									</button>
								</div>
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
			<Modal
				isOpen={showOrderConfirmationModal}
				ariaHideApp={false}
				className="submitModal"
			>
				<h1>Thank you! Your order was successfully submitted!</h1>
				<div id="icon">
					<i className="far fa-check-circle"></i>
				</div>
				<button
					className="button button--pan"
					onClick={() => {
						handleCloseModal();
					}}
				>
					<span>Got it!</span>
				</button>
			</Modal>
			<footer>
				<h5>Copyright © 2021</h5>
			</footer>
		</div>
	);
}

export default App;
