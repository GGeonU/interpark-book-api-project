import {combineReducers} from "redux";
import bestSeller from "../recommend/reducer";
import {all} from "redux-saga/effects";
import {bestSellerRequestSaga} from "../recommend/saga";


const rootReducer = combineReducers({
	bestSeller,
});

export function* RootSaga() {
	yield all([bestSellerRequestSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;