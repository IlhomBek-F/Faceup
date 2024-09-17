import { useQuery } from "@tanstack/react-query";
import { getRandomImage } from "../service";
import { QUERY_KEY } from "../helper";

export function useRandomImages() {
    const {status, data, error, isFetching} = useQuery({
        queryKey: [QUERY_KEY.RANDOM], queryFn: getRandomImage,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });

    return {status, data, error, isFetching}
}