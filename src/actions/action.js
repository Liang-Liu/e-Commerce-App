export function filterAction(size) {
	return {
		type: "FILTER",
		payload: size,
	};
}
export function sortAction(param) {
	return {
		type: "SORT",
		payload: param,
	};
}
export function addToCartAction(param) {
	return {
		type: "ADD_TO_CART",
		payload: param,
	};
}
export function removeFromCartAction(param) {
	return {
		type: "REMOVE_FROM_CART",
		payload: param,
	};
}
export function proceedBtnAction(param) {
	return {
		type: "PROCEED_BTN",
		payload: param,
	};
}
export function submitOrderAction(param) {
	return {
		type: "SUBMIT_ORDER",
		payload: param,
	};
}

// *********************************API Ready Section*****************************************

// export function updateProductAction(param) {
// 	return {
// 		type: "UPDATE_PRODUCT",
// 		payload: param,
// 	};
// }
// export function fetchAction(param) {
// 	async function getProductData() {
// 		const rep = await fetch(
// 			"https://fakestoreapi.com/products/category/electronics"
// 		);
// 		const repJson = await rep.json();
// 		return repJson;
// 	}
// 	return async (dispatch) => {
// 		const data = await getProductData();
// 			dispatch(updateProductAction(data));
// 	};
// }
