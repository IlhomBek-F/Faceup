import React from 'react';
import { ImagePlaceholders } from '../ImagePlaceholders/Image-placeholders';
import { ImageColumn } from '../ImageColumn/Image-column';
import { ImageItem } from '../ImageItem/Image-item';
import { useImageContext } from '@context/ImageProvider';
import { NotFoundImage } from '../NotFoundImage/Not-found-image';
import { STATUS_CODE } from '../../http/http-config';
import './image-lists.css';

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
        </div>
      </div>}
    </>
  )
}

export { ImageLists }