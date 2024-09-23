import { useQuery } from "@tanstack/react-query";
import { getImageByQuery } from "../service";
import { QUERY_KEY } from "@/helper";

export type QueryType = {
    q: string,
    page?: number
}

export let query: QueryType = {} as QueryType;

function useGetImageByQuery() {
    const { refetch, data, isFetching, error } = useQuery(
        {
            queryKey: [QUERY_KEY.PHOTOS],
            queryFn: () => getImageByQuery(query),
            refetchOnWindowFocus: false,
            enabled: !!query.q
        }
    );

    const handleSearchImages = (queryData: QueryType) => {
        query = { ...query, ...queryData };
        refetch()
    }

    return { handleSearchImages, foundImages: data ?? [], isSearching: isFetching, errorWhileSearching: error }
}

export { useGetImageByQuery }