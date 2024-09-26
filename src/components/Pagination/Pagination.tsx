import React from 'react';
import { Pagination as AntPagination } from 'antd';
import { TOTAL_IMAGE_PER_PAGE } from '../../utils/helper';
import { useImageContext } from '@context/ImageProvider';

function Pagination() {
  const { handleSearch, imageData, query } = useImageContext();

  const handlePaginationChange = (page: number) => {
    handleSearch({ ...query, page })
  }

  return <AntPagination
    showSizeChanger={false}
    defaultCurrent={query.page}
    showQuickJumper={false}
    onChange={handlePaginationChange}
    totalBoundaryShowSizeChanger={9}
    pageSize={TOTAL_IMAGE_PER_PAGE}
    total={imageData.total}
  />
}

export { Pagination }