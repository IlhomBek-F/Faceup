import { useQuery } from "@tanstack/react-query";
import { getImageByQuery } from "../service";
import { QUERY_KEY } from "../helper";

let query: any;

function useGetImageByQuery() {
    const { refetch, data, isFetching, error } = useQuery(
        {
        queryKey: [QUERY_KEY.PHOTOS], 
        queryFn: () => getImageByQuery(query),
        refetchOnWindowFocus: false,
        enabled: !!query
        }
    );

    const handleSearchImages = (queryData: any) => {
        query = {...query , ...queryData};
        refetch()
    }
    
    return {handleSearchImages, imagesByQuery: data ?? [], isLoadingImagesByQuery: isFetching, error}
}

export {useGetImageByQuery}