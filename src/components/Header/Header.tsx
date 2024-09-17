import { Flex, Input, Space } from 'antd';
import '../Header/header.css';
import { useRef } from 'react';
import { Pagination } from '../Pagination/Pagination';

function Header({handleSearch}: {handleSearch: (query: any) => void}) {
    const { Search } = Input;
    const inputRef = useRef(null);

    return (
        <>
         <Flex vertical={false} className='header' justify='center' align='center'>
            <Space direction='vertical'>
              <Search placeholder="search..." className='header__search' enterButton
               ref={inputRef}
               onPressEnter={(e) => handleSearch(e.currentTarget.value)}
               onSearch={() => handleSearch(inputRef.current?.input.value)}
              />
            </Space>
            <div className='header-pagination'>
              <Pagination />
            </div>
         </Flex>
        </>
    )
}

export {Header}