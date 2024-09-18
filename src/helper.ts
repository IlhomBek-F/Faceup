export enum QUERY_KEY {
    RANDOM = 'random',
    PHOTOS = 'photos'
}

export const IMAGE_COLUMN = 3;
export const TOTAL_IMAGE_PER_PAGE = 30;


export function normalizeResponseData(total: number, images: any, totalImage: number) {
    const imagesData = {images: [], total: totalImage};

       const imageCount = Math.round(total / IMAGE_COLUMN);
       let [start, end] = [0, imageCount];

       for(let i = 0; i < IMAGE_COLUMN; i++) {
           imagesData.images.push(images.slice(start, end));
           start += imageCount;
           end += imageCount
       }

  return imagesData 
}