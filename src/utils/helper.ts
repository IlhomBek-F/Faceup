export enum QUERY_KEY {
    RANDOM = 'random',
    PHOTOS = 'photos',
    DOWNLOAD = 'download'
}

export const IMAGE_COLUMN = 3;
export const TOTAL_IMAGE_PER_PAGE = 30;

export function normalizeResponseData(total: number, images: any, totalImage: number) {
    const imagesData = { imageColumns: [], total: totalImage };
    const imageCount = Math.round(total / IMAGE_COLUMN);
    let [start, end] = [0, imageCount];

    for (let i = 0; i < IMAGE_COLUMN; i++) {
        (imagesData.imageColumns as any).push(images.slice(start, end));
        start += imageCount;
        end += imageCount
    }

    return imagesData
}

export function downloadImage(blobUrl: string, imageAlt: string) {
    const a = document.createElement('a');
    a.href = blobUrl
    a.download = imageAlt;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}