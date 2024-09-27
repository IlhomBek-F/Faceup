import { useQuery } from "@tanstack/react-query";
import { getRandomImage } from "../service";
import { QUERY_KEY } from "../utils/helper";

export function useRandomImages() {
    const { status, data, error, isFetching, refetch, isSuccess } = useQuery({
        queryKey: [QUERY_KEY.RANDOM], queryFn: () => getRandomImage(),
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
    return { status, data, error, isLoading: isFetching, refetch, isSuccess }
}