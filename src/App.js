import { useState } from "react";
import originalData from "./data.json";
import ProductCell from "./components/ProductCell";
import FilterBar from "./components/FilterBar";

const productData = originalData;

function App() {
	const [data, setData] = useState(productData);

	function sortProduct(e) {
		const sortValue = e.target.value;
		if (sortValue === "latest") {
			setData(productData);
		} else if (sortValue === "lowest") {
			function compareFunc(a, b) {
				return a.price - b.price;
			}
			const tempArr = data.products;
			const nextData = [...tempArr].sort(compareFunc);
			const nextState = { products: nextData };
			setData(nextState);
		} else if (sortValue === "highest") {
			function compareFunc(a, b) {
				return b.price - a.price;
			}
			const tempArr = data.products;
			const nextData = [...tempArr].sort(compareFunc);
			const nextState = { products: nextData };
			setData(nextState);
		}
	}

	function FilterProduct(e) {
		const filterValue = e.target.value;
		if (filterValue === "ALL") {
			setData(productData);
		} else {
			const nextData = productData.products.filter((ele, idx) =>
				ele.availableSizes.includes(filterValue)
			);
			const nextState = { products: nextData };
			setData(nextState);
		}
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
						// console.log(ele);
						return <ProductCell key={ele.id} cellData={ele} />;
					})}
				</main>
				<div className="sidebar">shopping cart</div>
			</div>

			<footer>footer</footer>
		</div>
	);
}

export default App;
