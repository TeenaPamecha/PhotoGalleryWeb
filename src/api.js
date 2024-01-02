const dotenv = require('dotenv');
const axios = require('axios');
const { parsed: config } = dotenv.config();

const BASE_URL = `https://api.pexels.com/${config.CLOUD_NAME}`;

const auth = {
	username: config.API_KEY,
	password: config.API_SECRET,
};
export const getImages = async () => {
    const response = await axios.get(BASE_URL + '/v1/collections?type=photos', {
		auth
	});
	return response.data.json();
};
export const searchImages = async (searchValue) => {
    const response = await axios.get(BASE_URL + `/v1/search?query=${searchValue}&type=photos`, {
		auth
	});
	return response.data.json();
};