import { DownloadOutlined, LikeOutlined } from '@ant-design/icons';
import { Flex , Image} from 'antd';
import { ShareImage } from '../ShareImage/Share-image';
import './image-item.css';

function ImageItem({image, handleDownload}) {
    const {alt_description, urls, links, likes} = image;
   
    return (
        <div className='image-holder'>    
                 <aside className='image-side'>
                    <Flex vertical gap='10px'>
                      <ShareImage shareUrl={urls.small}/>
                      <DownloadOutlined className='download-icon' onClick={() => handleDownload(links.download_location, alt_description)}/>    
                    </Flex>
                </aside>        
                <Image.PreviewGroup>
                  <Image src={urls.small} alt={alt_description}/>
                </Image.PreviewGroup>      
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