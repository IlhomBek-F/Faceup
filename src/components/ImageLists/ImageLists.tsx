import React from 'react';
import { ImagePlaceholders } from '../ImagePlaceholders/ImagePlaceholders';
import { NotFoundImage } from '../NotFoundImage/NotFoundImage';
import { STATUS_CODE } from '../../http/http-config';
import { ShowMoreAction } from '../ShowMore/ShowMore';
import { ImageColumn } from '../ImageColumn/ImageColumn';
import { ImageItem } from '../ImageItem/ImageItem';
import { useImageContext } from '../../context/ImageProvider';
import './imageLists.css';

function ImageLists() {
  const { imageData, isLoading, error, query } = useImageContext();
  const [firstColumns, secondColumns, thirdColumns] = imageData?.imageColumns || [];

  if (!isLoading && error?.code === STATUS_CODE.NOT_FOUND && query.q.length) {
    return <NotFoundImage />
  }

  return (
    <>
      {isLoading ? <ImagePlaceholders /> : <div className='image-container'>
        <div className='image-grid'>
          <ImageColumn index={0}>
            {firstColumns?.map((image) => <ImageItem image={image} key={image.id} />)}
          </ImageColumn>
          <ImageColumn index={1}>
            {secondColumns?.map((image) => <ImageItem image={image} key={image.id} />)}
          </ImageColumn>
          <ImageColumn index={2}>
            {thirdColumns?.map((image) => <ImageItem image={image} key={image.id} />)}
          </ImageColumn>
          {imageData?.total_page > query.page && <ShowMoreAction />}
        </div>
      </div>}
    </>
  )
}

export { ImageLists }