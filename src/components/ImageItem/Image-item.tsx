import { ExpandOutlined, LikeOutlined } from '@ant-design/icons';
import './image-item.css';
import { Flex } from 'antd';

function ImageItem({image}) {
    return (
        <div className='image-holder' >                               
                <ExpandOutlined className='expand-icon'/>
                <img src={image.urls.small} alt='image'  className='img' />
                <footer className='image-footer'>
                    <Flex align='center' gap='8px'>
                      <LikeOutlined className='like-icon' size={50}/>
                      <p className='like-count'>{image.likes}</p>
                    </Flex>
                </footer>
        </div>
    )
}

export {ImageItem}