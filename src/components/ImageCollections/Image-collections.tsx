import { useRandomImages } from '../../hooks/useRandomImages';
import './image-collections.css';

function ImageCollections() {
   const {status, data, error, isFetching} = useRandomImages();

   if(isFetching) {
    return <p>Loading...</p>
   }
   
    return (
        <p>Images</p>
    )
}

export {ImageCollections}