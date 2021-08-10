import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitOrderAction } from "../actions/action";

function OrderForm({ handleShowModalFunc }) {
	const dispatch = useDispatch();

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
		<>
			<form id="orderForm">
				<div className="app-form-group">
					<input
						type="email"
						id="email"
						name="email"
						onChange={(e) => {
							handleOnChange(e);
						}}
						className="app-form-control"
						placeholder="Email"
					/>
					<br />
				</div>

				<input
					type="text"
					id="name"
					name="name"
					onChange={(e) => {
						handleOnChange(e);
					}}
					className="app-form-control"
					placeholder="Name"
				/>
				<br />
				<input
					type="text"
					id="address"
					name="address"
					onChange={(e) => {
						handleOnChange(e);
					}}
					className="app-form-control"
					placeholder="Address"
				/>
				<br />
				<div className="buttonInSidebar">
					<button
						className="button button--pan"
						type="submit"
						form="orderForm"
						onClick={(e) => {
							dispatch(submitOrderAction(clientInfo));
							handleShowModalFunc();
						}}
					>
						<span>Submit Order</span>
					</button>
				</div>
			</form>
		</>
	);
}

export default OrderForm;
