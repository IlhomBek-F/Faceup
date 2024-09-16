import { useQuery } from "@tanstack/react-query";
import { getImageByQuery } from "../service";

function useGetImageByQuery() {
    let query: string;
    const { refetch, data, isFetching, error } = useQuery(
        {
        queryKey: ['photo'], 
        queryFn: () => getImageByQuery(query),
        refetchOnWindowFocus: false,
        }
    );

    const handleGetByQuery = (queryData: string) => {
        query = queryData;
        refetch()
    }
    
    return {handleGetByQuery, data, isFetching, error}
}

export {useGetImageByQuery}