import { Header } from './components/Header/Header'
import { ImageCollections } from './components/ImageCollections/Image-collections'
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
  const [images, setImages] = useState(data);

  useEffect(() => {
    setImages(imagesByQuery.length ? imagesByQuery : data)
  }, [isFetching, isLoadingImagesByQuery]);

  return (
    <>
      <Header handleSearch={handleGetByQuery}/>
      {(isFetching || isLoadingImagesByQuery) && <ImagePlaceholders /> || <ImageCollections images={images}/>}
    </>
  )
}

export default App
