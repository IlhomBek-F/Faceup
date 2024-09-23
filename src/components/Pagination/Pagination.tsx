import React from 'react';
import { Pagination as AntPagination } from 'antd';
import { TOTAL_IMAGE_PER_PAGE } from '@/helper';
import { useImageContext } from '@context/ImageProvider';
import { query } from '@hooks/useFetchImageByQuery';

function Pagination() {
  const { handleSearch, imageData } = useImageContext();

  const handlePaginationChange = (page: number) => {
    handleSearch({ ...query, page })
  }

  return <AntPagination
    showSizeChanger={false}
    defaultCurrent={1}
    showQuickJumper={false}
    onChange={handlePaginationChange}
    totalBoundaryShowSizeChanger={9}
    pageSize={TOTAL_IMAGE_PER_PAGE}
    total={imageData.total}
  />
}

export { Pagination }