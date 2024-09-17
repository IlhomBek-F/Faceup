import { useQuery } from "@tanstack/react-query";
import { getImageByQuery } from "../service";
import { QUERY_KEY } from "../helper";

function useGetImageByQuery() {
    let query: string;
    const { refetch, data, isFetching, error } = useQuery(
        {
        queryKey: [QUERY_KEY.PHOTOS], 
        queryFn: () => getImageByQuery(query),
        refetchOnWindowFocus: false,
        }
    );

    const handleGetByQuery = (queryData: string) => {
        query = queryData;
        refetch()
    }
    
    return {handleGetByQuery, imagesByQuery: data ?? [], isLoadingImagesByQuery: isFetching, error}
}

export {useGetImageByQuery}