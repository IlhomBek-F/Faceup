import { DownloadOutlined, ExpandOutlined, LikeOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import './image-item.css';

function ImageItem({image, handleDownload}) {
    const {alt_description, urls, links, likes} = image;

    return (
        <div className='image-holder'>                 
                 <aside className='image-side'>
                    <Flex vertical gap='15px'>
                      <ExpandOutlined className='expand-icon' size={20}/>
                      <DownloadOutlined className='download-icon' onClick={() => handleDownload(links.download_location, alt_description)}/>    
                    </Flex>
                </aside>              
                <img src={urls.small} alt={alt_description} className='img' />
                <footer className='image-footer'>
                    <Flex align='center' gap='8px'>
                      <LikeOutlined className='like-icon' size={50}/>
                      <p className='like-count'>{likes}</p>
                    </Flex>
                </footer>
        </div>
    )
}

export {ImageItem}