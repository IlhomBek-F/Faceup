import { Input, Space } from 'antd';
import '../Header/header.css';

function Header() {
    const { Search } = Input;
    
    const handleSearch = () => {
       console.log('searching...')
    }

    return (
        <div className='header'>
            <Space direction='vertical'>
              <Search placeholder="search..." className='header__search' enterButton 
               onPressEnter={handleSearch}
               onSearch={handleSearch}
              />
            </Space>
        </div>
    )
}

export {Header}