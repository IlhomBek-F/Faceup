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
            {images.map((obj) => {
                    return <img src={obj.urls[imageSizes.SMALL]} alt='image' key={obj.id} className='img'/>
            })}
        </div>
    )
}

export {ImageCollections}