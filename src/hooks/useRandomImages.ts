import { useQuery } from "@tanstack/react-query";
import { getRandomImage } from "../service";

export function useRandomImages(query = '') {
    const {status, data, error, isFetching} = useQuery({
        queryKey: ['random', query], queryFn: getRandomImage,
        refetchOnWindowFocus: false,
    });

    return {status, data, error, isFetching}
}