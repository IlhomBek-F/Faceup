import React from "react";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useGetImageByQuery, QueryType } from "@hooks/useFetchImageByQuery";
import { useMessage } from "@hooks/useMessage";
import { useRandomImages } from "@hooks/useRandomImages";
import { useLoadMore } from "../hooks/useLoadMore";
import { FloatButton } from "antd";

const ImageContext = createContext({});

function ImageProvider({ children }: { children: ReactNode }) {
    const { contextHolder, callErrorAlert } = useMessage();
    const [query, setQuery] = useState({ q: '', page: 1 });
    let { data = [], error, isLoading, refetch, isSuccess: isSuccessRandom } = useRandomImages();
    const [imageData, setImages] = useState<typeof data>(data);
    const { handleLoadMore, isLoadingMore } = useLoadMore(setImages)

    let { handleSearchImages, foundImages, isSearching, errorWhileSearching, isSearchSuccess } = useGetImageByQuery();

    const isFailed = !isSuccessRandom && error || !isSearchSuccess && errorWhileSearching && query.q.length;

    useEffect(() => {
        if (isFailed) {
            callErrorAlert((errorWhileSearching || error)?.message || 'something went wrong');
        } else {
            setImages(foundImages.imageColumns?.[0]?.length ? foundImages : data);
        }
    }, [isLoading, isSearching]);

    const handleSearch = (queryData?: QueryType) => {
        if (!queryData.q?.length) {
            callErrorAlert('Enter query');
            return;
        };

        if (query.page === queryData.page && query.q === queryData.q) return;
        const updatedQueryData = query.q !== queryData.q ? { ...queryData, page: 1 } : queryData
        data.imageColumns = [];
        setQuery(updatedQueryData);
        handleSearchImages(queryData)
    }

    const handleBackHome = () => {
        foundImages.imageColumns = [];
        setQuery({ q: '', page: 1 });
        refetch();
    }

    const loadMore = () => {
        setQuery({ ...query, page: query.page + 1 });
        handleLoadMore({ ...query, page: query.page + 1 })
    }

    const contextData = {
        loadMore,
        handleSearch,
        handleBackHome,
        setQuery,
        query,
        imageData,
        isLoading: (isSearching || isLoading),
        loadingMore: isLoadingMore,
        error: (errorWhileSearching || error)
    }

    return <ImageContext.Provider value={contextData}>
        {contextHolder}
        {children}
        <FloatButton.BackTop />
    </ImageContext.Provider>
}

const useImageContext = () => useContext(ImageContext);

export { ImageProvider, useImageContext }