import { Pagination as AntPagination } from 'antd';
import { useImageContext } from '../../Context/ImageProvider';
import { TOTAL_IMAGE_PER_PAGE } from '../../helper';

function Pagination() {
  const {handleSearchImages, imageData} = useImageContext();

  const handlePaginationChange = (page: number) => {
    handleSearchImages({page})
  }

  return  <AntPagination
      showSizeChanger={false}
      defaultCurrent={3}
      showQuickJumper={false}
      onChange={handlePaginationChange}
      totalBoundaryShowSizeChanger={9}
      pageSize={TOTAL_IMAGE_PER_PAGE}
      total={imageData.total}
  />
}

export {Pagination}