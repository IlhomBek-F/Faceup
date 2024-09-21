import { Flex, Input, Space } from 'antd';
import '../Header/header.css';
import { useRef } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { useImageContext } from '../../context/ImageProvider';

function Header() {
    const {handleSearchImages, imageData} = useImageContext();

    const { Search } = Input;
    const inputRef = useRef(null);

    return (
        <>
         <Flex vertical={false} className='header' justify='center' align='center'>
            <Space direction='vertical'>
              <Search placeholder="search..." className='header__search' enterButton
               ref={inputRef}
               onPressEnter={(e) => handleSearchImages({q: e.currentTarget.value})}
               onSearch={() => handleSearchImages({q: inputRef.current?.input.value})}
              />
            </Space>
            {imageData.total > 1 && <div className='header-pagination'>
              <Pagination />
            </div>}
         </Flex>
        </>
    )
}

export {Header}