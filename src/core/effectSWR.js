import useSWR from "swr";
import { GetConcursos } from "../api/fetchConcursos";

export const useRquestSWR = (url) => {
	const { data, error } = useSWR(url, GetConcursos, { loadingTimeout: 10000 });
	return {
		concursos: data,
		error,
		isLoading: !data && !error,
	};
};

export default useRquestSWR;
