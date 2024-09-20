import { DownloadOutlined, LikeOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Flex , Image} from 'antd';
import { ShareImage } from '../ShareImage/Share-image';
import { useCallback, useState } from 'react';
import { getDownloadImageUrl } from '../../service';
import { downloadImage } from '../../helper';
import { DownloadSpin } from '../DownloadSpin/Download-spin';
import { Blurhash } from 'react-blurhash';
import './image-item.css';

function ImageItem({image}) {
    const {alt_description, urls, links, likes, user, blur_hash} = image;
    const [downloading, setDownloading] = useState(false);
    const [completed, setCompleted] = useState(false);

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
                 {completed && <>
                  <Avatar src={user.profile_image.medium} icon={<UserOutlined />} className='avatar'/>
                    <aside className='image-side'>
                     <Flex vertical gap='10px'>
                       <ShareImage shareUrl={urls.small}/>
                       <DownloadOutlined className='download-icon' onClick={handleDownloadImage}/>    
                    </Flex>
                    </aside>
                 </>}
                <Image.PreviewGroup>
                  <Image preview={completed} src={urls.small} alt={alt_description}  placeholder={
                    <Blurhash
                   hash={blur_hash}
                   resolutionX={32}
                   resolutionY={32}
                   width='100%'
                   height='100%'
                   punch={1}
                 />    
                  } onLoad={() => setCompleted(true)}/>
                </Image.PreviewGroup>
                {completed &&  <footer className='image-footer'>
                    <Flex align='center' gap='8px'>
                      <LikeOutlined className='like-icon' size={50}/>
                      <p className='like-count'>{likes}</p>
                    </Flex>
                </footer>}     
        </div>
    )
}

export {ImageItem}