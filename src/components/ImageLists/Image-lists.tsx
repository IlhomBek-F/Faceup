import { useImageContext } from '../../Context/ImageProvider';
import { ImagePlaceholders } from '../ImagePlaceholders/Image-placeholders';
import { ImageColumn } from '../ImageColumn/Image-column';
import { ImageItem } from '../ImageItem/Image-item';
import './image-lists.css';

function ImageLists() {
    const {imageData, isLoading} = useImageContext();

    return (
        <>
          {isLoading ? <ImagePlaceholders /> : <div className='image-container'>
             <div className='image-grid'>
               {
                imageData.imageColumns?.map((column: any[], index: number) => {
                    return <ImageColumn key={index} index={index}>
                                   {column.map((imageObj: any) => <ImageItem image={imageObj} key={imageObj.id}/>)}
                          </ImageColumn>
                    })
                }
          </div>
        </div>} 
        </>
    )
}

export {ImageLists}