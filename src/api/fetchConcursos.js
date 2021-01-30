import axios from "axios";

export const GetConcursos = (url) => axios.get(url).then((success) => success.data)
	.catch((error) => {
	    throw error;
	});

export default {
	GetConcursos,
};
