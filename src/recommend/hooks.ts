import {useDispatch, useSelector, useStore} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {requestBestSeller} from "./reducer";
import {RootState} from "../util/RootSaga";

interface BookItems {
	author: string,
	categoryName: string,
	coverLargeUrl: string,
	description: string,
	itemId: number,
	publisher: string,
	title: string,
}

interface aaa {
	[index: number]: BookItems
}

export default function useBestSeller() {
	const bookItems: BookItems[] = useSelector((state: RootState) => state.bestSeller.payload);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(requestBestSeller());
	}, [dispatch]);
	
	console.log(bookItems);
	
	return {
		bookItems,
	}
}