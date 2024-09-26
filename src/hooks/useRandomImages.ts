import { useQuery } from "@tanstack/react-query";
import { getImageByQuery } from "../service";
import { QUERY_KEY } from "../utils/helper";

export function useRandomImages() {
    const { status, data, error, isFetching, refetch } = useQuery({
        queryKey: [QUERY_KEY.RANDOM], queryFn: () => getImageByQuery({ q: 'flower' }),
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
    return { status, data, error, isFetching, refetch }
}