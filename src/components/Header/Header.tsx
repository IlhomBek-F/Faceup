import { Input, Space } from 'antd';
import '../Header/header.css';
import { useRef } from 'react';

function Header({handleSearch}: {handleSearch: (query: any) => void}) {
    const { Search } = Input;
    const inputRef = useRef(null);

    return (
        <div className='header'>
            <Space direction='vertical'>
              <Search placeholder="search..." className='header__search' enterButton
               ref={inputRef}
               onPressEnter={(e) => handleSearch(e.currentTarget.value)}
               onSearch={() => handleSearch(inputRef.current?.input.value)}
              />
            </Space>
        </div>
    )
}

export {Header}