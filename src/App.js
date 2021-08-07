import ProductCell from "./components/ProductCell";
import FilterBar from "./components/FilterBar";
import CartCell from "./components/CartCell";
import OrderForm from "./components/OrderForm";
import { useDispatch, useSelector } from "react-redux";
import { proceedBtnAction } from "./actions/action";

function App() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	function countTotalPrice(arr) {
		let totalPrice = 0;
		arr.forEach((ele, idx) => {
			totalPrice += ele.item.price * ele.count;
		});
		return totalPrice;
	}

	return (
		<div className="gird-container">
			<nav>NavBar</nav>
			<div className="content">
				content
				<FilterBar />
				<main>
					Main
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
									<OrderForm />
								</div>
							)}
						</>
					)}
				</div>
			</div>

			<footer>footer</footer>
		</div>
	);
}

export default App;
