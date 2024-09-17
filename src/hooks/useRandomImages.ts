import { useQuery } from "@tanstack/react-query";
import { getRandomImage } from "../service";
import { QUERY_KEY } from "../helper";

export function useRandomImages(query = '') {
    const {status, data, error, isFetching} = useQuery({
        queryKey: [QUERY_KEY.RANDOM, query], queryFn: getRandomImage,
        refetchOnWindowFocus: false,
    });

    return {status, data, error, isFetching}
}