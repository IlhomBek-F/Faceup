import './image-lists.css';

 enum imageSizes {
    RAW = 'raw',
    REGULAR = 'regular',
    SMALL = 'small',
    THUMB = 'thumb',
    SMALL_S3 = 'small_s3'
 } 

function ImageLists({imageColumns}: {images: any[][]}) {
    return (
        <div className='image-container'>
             <div className='image-grid'>
               {
                imageColumns.map((column: any[], index: number) => {
                    return <div className={`image-column-${index + 1}`} key={index}>
                                { column.map((imageObj: any) => {
                                      return <img src={imageObj.urls[imageSizes.SMALL]} 
                                                         alt='image' key={imageObj.id} className='img' />
                              })}
                          </div>     
                    })
                }
          </div>
        </div>
    )
}

export {ImageLists}