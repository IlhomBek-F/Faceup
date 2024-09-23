import { Flex, Input, Space } from 'antd';
import '../Header/header.css';
import { useRef } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { useImageContext } from '../../Context/ImageProvider';

function Header() {
  const { handleSearch, imageData } = useImageContext();

  const { Search } = Input;
  const inputRef = useRef(null);

  return (
    <>
      <Flex vertical={false} className='header' justify='center' align='center'>
        <Space direction='vertical'>
          <Search placeholder="search..." className='header__search' enterButton
            ref={inputRef}
            onPressEnter={(e) => handleSearch({ q: e.currentTarget.value })}
            onSearch={() => handleSearch({ q: inputRef.current?.input.value })}
          />
        </Space>
        {imageData.total > 1 && <div className='header-pagination'>
          <Pagination />
        </div>}
      </Flex>
    </>
  )
}

export { Header }