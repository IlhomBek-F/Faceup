import { ExpandOutlined } from '@ant-design/icons';
import './image-item.css';

function ImageItem({image}) {
    return (
        <div style={{position: 'relative'}}>                               
                <ExpandOutlined className='expand-icon'/>
                <img src={image.urls.small} alt='image'  className='img' />
        </div>
    )
}

export {ImageItem}