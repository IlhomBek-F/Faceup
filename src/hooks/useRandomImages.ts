import { useQuery } from "@tanstack/react-query";
import { getRandomImage } from "../service";

export function useRandomImages() {
    const {status, data, error, isFetching} = useQuery({queryKey: ['random'], queryFn: getRandomImage});

    return {status, data, error, isFetching}
}