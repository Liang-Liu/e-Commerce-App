import { useState } from "react";
import productData from "./data.json";
import ProductCell from "./components/ProductCell";

function App() {
	const [data, setData] = useState(productData);

	return (
		<div className="gird-container">
			<nav>NavBar</nav>
			<main>
				Main
				{data.products.map((ele, idx) => {
					// console.log(ele);
					return <ProductCell key={ele.id} cellData={ele} />;
				})}
			</main>
			<footer>footer</footer>
		</div>
	);
}

export default App;
