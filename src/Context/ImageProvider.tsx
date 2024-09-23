import React from "react";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { QueryType, useGetImageByQuery } from "@hooks/useFetchImageByQuery";
import { useMessage } from "@hooks/useMessage";
import { useRandomImages } from "@hooks/useRandomImages";

const ImageContext = createContext<any>({});

function ImageProvider({ children }: { children: ReactNode }) {
    const { contextHolder, callErrorAlert } = useMessage();
    const { data = [], error, isFetching } = useRandomImages();
    const { handleSearchImages, foundImages, isSearching, errorWhileSearching } = useGetImageByQuery();
    const [imageData, setImages] = useState<typeof data>(data);

    useEffect(() => {
        if ((!isFetching || !isSearching) && (error || errorWhileSearching)) {
            callErrorAlert((errorWhileSearching || error)?.message || 'something went wrong')
        } else {
            setImages(foundImages.imageColumns?.length ? foundImages : data)
        }

    }, [isFetching, isSearching])

    const handleSearch = (query: QueryType) => {
        if (!query.q?.length) {
            callErrorAlert('Enter query');
            return;
        }

        handleSearchImages(query)
    }

    return <ImageContext.Provider value={{ handleSearch, isLoading: (isFetching || isSearching), imageData }}>
        {contextHolder}
        {children}
    </ImageContext.Provider>
}

const useImageContext = () => useContext(ImageContext);

export { ImageProvider, useImageContext }