import { useState } from "react";
import originalData from "./data.json";
import ProductCell from "./components/ProductCell";
import FilterBar from "./components/FilterBar";
import CartCell from "./components/CartCell";

const productData = originalData;

function App() {
	const [data, setData] = useState({
		products: productData.products,
		cartItems: [],
	});

	function sortProduct(e) {
		const sortValue = e.target.value;
		if (sortValue === "latest") {
			setData((prevData) => {
				return {
					...prevData,
					products: productData.products,
				};
			});
		} else if (sortValue === "lowest") {
			function compareFunc(a, b) {
				return a.price - b.price;
			}
			const tempArr = data.products;
			const nextData = [...tempArr].sort(compareFunc);
			setData((prevData) => {
				return {
					...prevData,
					products: nextData,
				};
			});
		} else if (sortValue === "highest") {
			function compareFunc(a, b) {
				return b.price - a.price;
			}
			const tempArr = data.products;
			const nextData = [...tempArr].sort(compareFunc);
			setData((prevData) => {
				return {
					...prevData,
					products: nextData,
				};
			});
		}
	}
	function FilterProduct(e) {
		const filterValue = e.target.value;
		if (filterValue === "ALL") {
			setData((prevData) => {
				return {
					...prevData,
					products: productData.products,
				};
			});
		} else {
			const nextData = productData.products.filter((ele, idx) =>
				ele.availableSizes.includes(filterValue)
			);
			setData((prevData) => {
				return {
					...prevData,
					products: nextData,
				};
			});
		}
	}
	function addToCart(item) {
		// console.log(item);
		function someCallBackFunc(ele, idx) {
			return ele.item.id === item.id;
		}

		if (!data.cartItems.some(someCallBackFunc)) {
			setData((prevData) => {
				const cartItem = { item: item, count: 1 };
				return {
					...prevData,
					cartItems: [...prevData.cartItems, cartItem],
				};
			});
		}
		if (data.cartItems.some(someCallBackFunc)) {
			const temp = data.cartItems.map((ele, idx) => {
				if (ele.item.id === item.id) {
					ele.count++;
				}
				return ele;
			});
			setData((prevData) => {
				return {
					...prevData,
					cartItems: temp,
				};
			});
		}
	}
	function removeFromCart(item) {
		console.log(item);
		const temp = data.cartItems.filter((ele, idx) => {
			console.log(ele);

			return ele !== item;
		});

		setData((prevData) => {
			return {
				...prevData,
				cartItems: temp,
			};
		});
	}
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
				<FilterBar
					sortProductFunc={sortProduct}
					FilterProductFunc={FilterProduct}
				/>
				<main>
					Main
					{data.products.map((ele, idx) => {
						return (
							<ProductCell
								key={ele.id}
								cellData={ele}
								addToCartFunc={addToCart}
							/>
						);
					})}
				</main>
				<div className="sidebar">
					shopping cart
					<h3>You have {data.cartItems.length} item in cart</h3>
					{console.log(data.cartItems)}
					{data.cartItems.map((ele, idx) => {
						return (
							<CartCell
								key={ele.item.id}
								cartItemData={ele}
								removeFromCartFunc={removeFromCart}
							/>
						);
					})}
					{data.cartItems.length !== 0 && (
						<div className="proceedSection">
							<h4>Total: $ {countTotalPrice(data.cartItems)}</h4>
							<button
								className="proceed"
								onClick={(e) => {
									// addToCartFunc(cellData);
								}}
							>
								Proceed
							</button>
						</div>
					)}
				</div>
			</div>

			<footer>footer</footer>
		</div>
	);
}

export default App;
