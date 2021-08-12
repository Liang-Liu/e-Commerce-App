import _ from "lodash"; // cool kids know _ is low-dash

function reducer(state, action) {
	switch (action.type) {
		case "FILTER":
			const filterValue = action.payload;
			if (filterValue === "ALL") {
				return {
					...state,
					products: state.originalData.products,
				};
			} else {
				const nextData = state.originalData.products.filter((ele, idx) =>
					ele.availableSizes.includes(filterValue)
				);
				return {
					...state,
					products: nextData,
				};
			}
		// break;

		case "SORT":
			const sortValue = action.payload;
			if (sortValue === "latest") {
				return {
					...state,
					products: state.originalData.products,
				};
			} else if (sortValue === "lowest") {
				function compareFunc(a, b) {
					return a.price - b.price;
				}
				const tempArr = state.products;
				const nextData = [...tempArr].sort(compareFunc);
				return {
					...state,
					products: nextData,
				};
			} else if (sortValue === "highest") {
				function compareFunc(a, b) {
					return b.price - a.price;
				}
				const tempArr = state.products;
				const nextData = [...tempArr].sort(compareFunc);
				return {
					...state,
					products: nextData,
				};
			}
			break;

		case "ADD_TO_CART":
			const item = action.payload;
			function someCallBackFunc(ele, idx) {
				return ele.item.id === item.id;
			}

			if (!state.cartItems.some(someCallBackFunc)) {
				const cartItem = { item: item, count: 1 };
				return {
					...state,
					cartItems: [...state.cartItems, cartItem],
				};
			}
			if (state.cartItems.some(someCallBackFunc)) {
				const temp = state.cartItems.map((ele, idx) => {
					if (ele.item.id === item.id) {
						ele.count += 1;
						return ele;
					}
					return ele;
				});

				const newArr = _.cloneDeep(temp);

				return {
					...state,
					cartItems: newArr,
				};
			}
			break;

		case "REMOVE_FROM_CART":
			const itemRemove = action.payload;

			const temp = state.cartItems.filter((ele, idx) => {
				return ele !== itemRemove;
			});
			return {
				...state,
				cartItems: temp,
			};
		// break;

		case "PROCEED_BTN":
			return {
				...state,
				showOrderForm: true,
			};
		// break;

		case "SUBMIT_ORDER":
			const clientInfo = action.payload;
			const finalOrder = {
				orderItems: state.cartItems,
				clientInfo: clientInfo,
			};
			return {
				...state,
				cartItems: [],
				showOrderForm: false,
				submittedOrderDetail: finalOrder,
			};
		// break;
		case "UPDATE_PRODUCT":
			const product = action.payload;

			return {
				...state,
				products: product,
				originalData: product,
			};
		// break;

		default:
			return state;
		// break;
	}
}

export default reducer;
