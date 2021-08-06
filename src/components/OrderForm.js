import React from "react";
import { useState } from "react";

function OrderForm({ submitOrderFunc }) {
	const [clientInfo, setClientInfo] = useState({
		email: "",
		name: "",
		address: "",
	});

	function handleOnChange(e) {
		setClientInfo((prevData) => {
			return {
				...prevData,
				[e.target.name]: e.target.value,
			};
		});
	}

	return (
		<form id="orderForm">
			<label for="email">Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				onChange={(e) => {
					handleOnChange(e);
				}}
			/>
			<br />
			<label for="name">Name:</label>
			<input
				type="text"
				id="name"
				name="name"
				onChange={(e) => {
					handleOnChange(e);
				}}
			/>
			<br />
			<label for="address">Address:</label>
			<input
				type="text"
				id="address"
				name="address"
				onChange={(e) => {
					handleOnChange(e);
				}}
			/>
			<br />

			<button
				type="submit"
				form="orderForm"
				onClick={(e) => {
					submitOrderFunc(clientInfo);
				}}
			>
				Submit
			</button>
		</form>
	);
}

export default OrderForm;
