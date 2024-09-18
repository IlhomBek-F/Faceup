import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useGetImageByQuery } from "../hooks/useFetchImageByQuery";
import { useRandomImages } from "../hooks/useRandomImages";
import { useMessage } from "../hooks/useMessage";

const ImageContext = createContext<any>(null);

function ImageProvider({children}: {children: ReactNode}) {
    const {contextHolder, callErrorAlert} = useMessage();
    const { data = [], error, isFetching} = useRandomImages();
    const {handleSearchImages, foundImages, isSearching, errorWhileSearching} = useGetImageByQuery();
    const [imageData, setImages] = useState<typeof data>(data);

    useEffect(() => {
        if((!isFetching || !isSearching) && (error || errorWhileSearching)) {
           callErrorAlert((errorWhileSearching || error)?.message || 'something went wrong')
        }else {
            setImages(foundImages.images?.length ? foundImages : data)
        }

    }, [isFetching, isSearching])
   
    return <ImageContext.Provider value={{handleSearchImages, isLoading: (isFetching || isSearching), imageData}}>
        {contextHolder}
        {children}
    </ImageContext.Provider>
}

const useImageContext = () => useContext(ImageContext);

export {ImageProvider, useImageContext}