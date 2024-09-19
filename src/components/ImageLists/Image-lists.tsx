import { useImageContext } from '../../Context/ImageProvider';
import { ImagePlaceholders } from '../ImagePlaceholders/Image-placeholders';
import { ImageColumn } from '../ImageColumn/Image-column';
import { ImageItem } from '../ImageItem/Image-item';
import { getDownloadImageUrl } from '../../service';
import { downloadImage } from '../../helper';
import './image-lists.css';
import { Empty } from 'antd';

function ImageLists() {
    const {imageData, isLoading} = useImageContext();
    const handleDownloadImage = (id: string, imageAlt: string) => getDownloadImageUrl(id)
    .then((url) => downloadImage(url, imageAlt))
    .catch(console.log)
  
    return (
        <>
          {isLoading ? <ImagePlaceholders /> : !imageData.imageColumns?.[0].length ? <Empty className='empty'/>
           : <div className='image-container'>
             <div className='image-grid'>
               {
                imageData.imageColumns?.map((column: any[], index: number) => {
                    return <ImageColumn key={index} index={index}>
                                   {column.map((imageObj: any) => <ImageItem image={imageObj} key={imageObj.id} handleDownload={handleDownloadImage}/>)}
                          </ImageColumn>
                    })
                }
          </div>
        </div>} 
        </>
    )
}

export {ImageLists}