import originalData from "./data.json";
import reducer from "./reducers/reducer";
import { configureStore } from "@reduxjs/toolkit";

const productData = originalData;
const initialState = {
	products: productData.products,
	cartItems: [],
	showOrderForm: false,
	submittedOrderDetail: {},
	originalData: originalData,
};

const store = configureStore({
	reducer,
	preloadedState: initialState,
});

export default store;
