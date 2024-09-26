import React from "react";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useGetImageByQuery, QueryType } from "@hooks/useFetchImageByQuery";
import { useMessage } from "@hooks/useMessage";
import { useRandomImages } from "@hooks/useRandomImages";
const ImageContext = createContext<any>({});

function ImageProvider({ children }: { children: ReactNode }) {
    const { contextHolder, callErrorAlert } = useMessage();
    let { data = [], error, isFetching, refetch } = useRandomImages();
    const { handleSearchImages, foundImages, isSearching, errorWhileSearching } = useGetImageByQuery();
    const [imageData, setImages] = useState<typeof data>(data);
    const [query, setQuery] = useState({ q: '', page: 1 });

    useEffect(() => {
        if ((!isFetching || !isSearching) && (error || errorWhileSearching)) {
            callErrorAlert((errorWhileSearching || error)?.message || 'something went wrong')
        } else {
            setImages(() => foundImages.imageColumns?.[0]?.length ? foundImages : data);
        }
    }, [isFetching, isSearching])

    const handleSearch = (queryData?: QueryType) => {
        if (!queryData.q?.length) {
            callErrorAlert('Enter query');
            return;
        };

        if (query.page === queryData.page && query.q === queryData.q) return;

        if (query.q !== queryData.q) {
            queryData = { ...queryData, page: 1 }
        }

        data.imageColumns = [];
        setQuery(queryData)
        handleSearchImages(queryData)
    }

    const handleBackHome = () => {
        setQuery({ q: '', page: 1 });
        refetch();
    }

    return <ImageContext.Provider value={{ handleSearch, handleBackHome, setQuery, query, isLoading: (isFetching || isSearching), imageData }}>
        {contextHolder}
        {children}
    </ImageContext.Provider>
}

const useImageContext = () => useContext(ImageContext);

export { ImageProvider, useImageContext }