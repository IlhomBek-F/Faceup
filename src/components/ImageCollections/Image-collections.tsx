import './image-collections.css';

 enum imageSizes {
    RAW = 'raw',
    REGULAR = 'regular',
    SMALL = 'small',
    THUMB = 'thumb',
    SMALL_S3 = 'small_s3'
 } 

function ImageCollections({images}: {images: any[]}) {
    return (
        <div className='image-container'>
             <div className='image-grid'>
             <div className='image-column-1'> 
            {images.slice(0,4).map((obj) => {
                   return <img src={obj.urls[imageSizes.SMALL]} alt='image' key={obj.id} className='img'/>
            })}
            </div>
            <div className='image-column-2'>
            {images.slice(4,8).map((obj) => {
                   return <img src={obj.urls[imageSizes.SMALL]} alt='image' key={obj.id} className='img'/>
            })}
            </div>
            <div className='image-column-3'>
            {images.slice(8).map((obj) => {
                   return <img src={obj.urls[imageSizes.SMALL]} alt='image' key={obj.id} className='img'/>
            })}
            </div>
             </div>
           
        </div>
    )
}

export {ImageCollections}