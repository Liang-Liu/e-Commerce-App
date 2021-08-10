import React from "react";
import { useDispatch } from "react-redux";
import { filterAction, sortAction } from "../actions/action";

function FilterBar() {
	const dispatch = useDispatch();

	return (
		<div className="filterBar">
			6 Products In Total
			<div className="sortBar">
				<label htmlFor="sortBar">Sort By: </label>
				<select
					name="sortBar"
					id="sortBar"
					onChange={(e) => {
						dispatch(sortAction(e.target.value));
					}}
				>
					<option value="latest">Latest</option>
					<option value="lowest">Price Lowest</option>
					<option value="highest">Price Highest</option>
				</select>
			</div>
			<div className="filterSizeBar">
				<label htmlFor="filterSizeBar">Filter By: </label>
				<select
					name="filterSizeBar"
					id="filterSizeBar"
					onChange={(e) => {
						dispatch(filterAction(e.target.value));
					}}
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
