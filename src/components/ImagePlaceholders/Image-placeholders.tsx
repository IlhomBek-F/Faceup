import { Skeleton } from 'antd'
import './image-placeholder.css'

function ImagePlaceholders() {

    return (
        <div className="image-container">
           <div className='image-grid'>
               <div className='image-column-1'>
               <Skeleton.Image active style={{width: '400px', height: '400px'}}/>
               <Skeleton.Image active style={{width: '400px', height: '400px'}}/>
               </div>
               <div className='image-column-2'>
               <Skeleton.Image active style={{width: '400px', height: '300px'}}/>
               <Skeleton.Image active style={{width: '400px', height: '500px'}}/>
               </div>
               <div className='image-column-3'>
               <Skeleton.Image active style={{width: '400px', height: '500px'}}/>
               <Skeleton.Image active style={{width: '400px', height: '300px'}}/>
               </div>
           </div>
        </div>
    )
}

export {ImagePlaceholders}