import React from "react";

function FilterBar({ sortProductFunc, FilterProductFunc }) {
	return (
		<div className="filterBar">
			6 products
			<div className="sortBar">
				<label for="sortBar">Sort By:</label>
				<select name="sortBar" id="sortBar" onChange={sortProductFunc}>
					<option value="latest">Latest</option>
					<option value="lowest">Price Lowest</option>
					<option value="highest">Price Highest</option>
				</select>
			</div>
			<div className="filterSizeBar">
				<label for="filterSizeBar">Filter By:</label>
				<select
					name="filterSizeBar"
					id="filterSizeBar"
					onChange={FilterProductFunc}
				>
					<option value="ALL">ALL</option>
					<option value="S">S</option>
					<option value="M">M</option>
					<option value="L">L</option>
					<option value="XL">XL</option>
					<option value="XXL">XXL</option>
				</select>
			</div>
		</div>
	);
}

export default FilterBar;
