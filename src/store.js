import { createStore } from "redux";
import originalData from "./data.json";
import reducer from "./reducers/reducer";

const productData = originalData;
const initialState = {
	products: productData.products,
	cartItems: [],
	showOrderForm: false,
	submittedOrderDetail: {},
	originalData: originalData,
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
