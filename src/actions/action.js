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
