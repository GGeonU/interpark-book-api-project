import {ActionType, createAction, createReducer} from "typesafe-actions";

export enum Types {
	REQUEST_BEST_SELLER = 'REQUEST_BEST_SELLER',
	REQUEST_BEST_SELLER_SUCCESS = 'REQUEST_BEST_SELLER_SUCCESS',
	REQUEST_BEST_SELLER_FAILURE = 'REQUEST_BEST_SELLER_FAILURE',
}

export const requestBestSeller = createAction(
	Types.REQUEST_BEST_SELLER,
)();

export const requestBestSellerSuccess = createAction(
	Types.REQUEST_BEST_SELLER_SUCCESS,
)();

export const requestBestSellerFailure = createAction(
	Types.REQUEST_BEST_SELLER_FAILURE,
)();

const bestSellerActions = {requestBestSeller, requestBestSellerSuccess, requestBestSellerFailure};
type BestSellerActionsType = ActionType<typeof bestSellerActions>

export interface BestSellerItems {
	payload: any,
}

const initialState: BestSellerItems = {
	payload: {},
};

const bestSeller = createReducer<BestSellerItems, BestSellerActionsType>(initialState, {
	[Types.REQUEST_BEST_SELLER]: (state: BestSellerItems) => ({
		...state,
		isRequest: true,
		error: null,
	}),
	[Types.REQUEST_BEST_SELLER_SUCCESS]: (state: BestSellerItems, {payload}: any) => ({
		...state,
		payload,
		isRequest: false,
		error: null,
	}),
	[Types.REQUEST_BEST_SELLER_FAILURE]: (state: BestSellerItems, e: any) => ({
		...state,
		isRequest: false,
		error: e,
	})
});

export default bestSeller;