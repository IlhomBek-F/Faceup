import { DownloadOutlined, LikeOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Flex , Image} from 'antd';
import { ShareImage } from '../ShareImage/Share-image';
import { useCallback, useState } from 'react';
import { getDownloadImageUrl } from '../../service';
import { downloadImage } from '../../helper';
import './image-item.css';
import { DownloadSpin } from '../DownloadSpin/Download-spin';

function ImageItem({image}) {
    const {alt_description, urls, links, likes, user} = image;
    const [downloading, setDownloading] = useState(false);

    const handleDownloadImage = useCallback(() => {
      setDownloading(true);
      getDownloadImageUrl(links.download_location)
      .then((url) => downloadImage(url, alt_description))
      .catch(console.log)
      .finally(() => {
        setDownloading(false)
      })
    }, [])

    return (
        <div className='image-holder'>
                 {downloading && <DownloadSpin />}    
                 <Avatar src={user.profile_image.medium} icon={<UserOutlined />} className='avatar'/>
                 <aside className='image-side'>
                    <Flex vertical gap='10px'>
                      <ShareImage shareUrl={urls.small}/>
                      <DownloadOutlined className='download-icon' onClick={handleDownloadImage}/>    
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