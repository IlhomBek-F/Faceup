import { Pagination as AntPagination } from 'antd';

function Pagination() {
  
  return  <AntPagination
      showSizeChanger={false}
      defaultCurrent={3}
      showQuickJumper={false}
      onChange={(page) => console.log(page)}
      total={500}
  />
}

export {Pagination}