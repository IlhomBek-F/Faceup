import { Header } from './components/Header/Header'
import { ImageLists } from './components/ImageLists/Image-lists'
import { QueryClient } from '@tanstack/react-query';
import { useRandomImages } from './hooks/useRandomImages';
import { ImagePlaceholders } from './components/ImagePlaceholders/Image-placeholders';
import { useEffect, useState } from 'react';
import { useGetImageByQuery } from './hooks/useFetchImageByQuery';
import './App.css'

export const queryClient = new QueryClient()

function App() { 
  const { data = [], error, isFetching} = useRandomImages();
  const {handleGetByQuery, imagesByQuery, isLoadingImagesByQuery} = useGetImageByQuery();
  const [imageColumns, setImages] = useState(data);

  useEffect(() => {
    setImages(imagesByQuery.length ? imagesByQuery : data)
  }, [isFetching, isLoadingImagesByQuery]);

  return (
    <>
      <Header handleSearch={handleGetByQuery}/>
      {(isFetching || isLoadingImagesByQuery) && <ImagePlaceholders /> || <ImageLists imageColumns={imageColumns}/>}
    </>
  )
}

export default App
