import {call, put, takeLatest} from 'redux-saga/effects'
import {Types} from "./reducer";
import {getBestSeller} from "./api";

function* bestSellerRequest() {
	try{
		const response = yield call(getBestSeller);
		console.log(response.data.item);
		yield put({
			type: Types.REQUEST_BEST_SELLER_SUCCESS,
			payload: response.data.item,
		})
	} catch (e) {
		yield put({
			type: Types.REQUEST_BEST_SELLER_FAILURE,
			error: e
		})
	}
}

export function* bestSellerRequestSaga() {
	yield takeLatest(Types.REQUEST_BEST_SELLER, bestSellerRequest);
}