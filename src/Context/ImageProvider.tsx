import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useGetImageByQuery } from "../hooks/useFetchImageByQuery";
import { useRandomImages } from "../hooks/useRandomImages";

const ImageContext = createContext<any>(null);

function ImageProvider({children}: {children: ReactNode}) {
    const { data = [], error, isFetching} = useRandomImages();
    const {handleSearchImages, imagesByQuery, isLoadingImagesByQuery} = useGetImageByQuery();
    const [images, setImages] = useState<typeof data>(data);

    useEffect(() => {
        setImages(imagesByQuery.length ? imagesByQuery : data)
    }, [isFetching, isLoadingImagesByQuery])


    return <ImageContext.Provider value={{handleSearchImages, isLoading: isLoadingImagesByQuery, images}}>
        {children}
    </ImageContext.Provider>
}

const useImageContext = () => useContext(ImageContext);

export {ImageProvider, useImageContext}