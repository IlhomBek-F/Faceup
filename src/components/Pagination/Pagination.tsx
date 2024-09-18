import { Pagination as AntPagination } from 'antd';
import { useImageContext } from '../../Context/ImageProvider';

function Pagination() {
  const {handleSearchImages, images} = useImageContext();

  const handlePaginationChange = (page: number) => {
    handleSearchImages({page})
  }

  return  <AntPagination
      showSizeChanger={false}
      defaultCurrent={3}
      showQuickJumper={false}
      onChange={handlePaginationChange}
      total={images.total}
  />
}

export {Pagination}