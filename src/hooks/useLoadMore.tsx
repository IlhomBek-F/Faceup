import { SetStateAction, useState } from "react";
import { getImageByQuery } from "../service";
import { QueryType } from "@hooks/useFetchImageByQuery";
import { mergeColumns } from "../utils/helper";

function useLoadMore(setImages: SetStateAction<any>) {
    const [isLoadingMore, setLoading] = useState<boolean>(false);

    const handleLoadMore = (query: QueryType) => {
        setLoading(true)
        getImageByQuery(query)
            .then((res) => {
                const images = mergeColumns(res.imageColumns)
                setImages((prev) => {
                    prev.imageColumns[2].push(...images)
                    return prev;
                })
            }).finally(() => setLoading(false))
    }

    return { isLoadingMore, handleLoadMore }
}

export { useLoadMore }