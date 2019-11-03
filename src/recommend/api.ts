import axios from 'axios'
import {interpark_base_url, interpark_key} from "../util/constant_api.";

const base = axios.create({
	baseURL: interpark_base_url,
});

const bestSeller = (params: object) => {
	return base.get('bestSeller.api', {params})
};

export const getBestSeller = async () => {
	const params = {
		key: interpark_key,
		categoryId: '100',
		output: 'json'
	};
	return await bestSeller(params);
};



