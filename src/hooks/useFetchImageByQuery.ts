import { useQuery } from "@tanstack/react-query";
import { getImageByQuery } from "../service";
import { QUERY_KEY } from "../utils/helper";

export type QueryType = {
    q: string,
    page?: number,
    limit?: number
}

export let query: QueryType = {} as QueryType;

function useGetImageByQuery() {
    const { refetch, data, isFetching, error, isSuccess } = useQuery(
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

    return {
        handleSearchImages,
        foundImages: data ?? [],
        isSearching: isFetching,
        errorWhileSearching: error,
        isSearchSuccess: isSuccess
    }
}

export { useGetImageByQuery }