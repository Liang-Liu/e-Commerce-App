import { useState } from "react";
import productData from "./data.json";
import ProductCell from "./components/ProductCell";

function App() {
	const [data, setData] = useState(productData);

	return (
		<div className="gird-container">
			<nav>NavBar</nav>
			<div className="content">
				content
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
