import { Flex, Input, Space } from 'antd';
import { Pagination } from '../Pagination/Pagination';
import { useImageContext } from '@context/ImageProvider';
import React, { useEffect, useState } from 'react';
import './header.css';

function Header() {
  const { handleSearch, imageData, query } = useImageContext();
  const { Search } = Input;
  const [value, setValue] = useState<string>(query.q);

  useEffect(() => {
    setValue(query.q)
  }, [query.q])

  return (
    <>
      <Flex vertical={false} className='header' justify='center' align='center'>
        <Space direction='vertical'>
          <Search placeholder="search..." className='header__search' enterButton
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onPressEnter={(e) => handleSearch({ q: value, page: query.page })}
            onSearch={() => handleSearch({ q: value, page: query.page })}
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