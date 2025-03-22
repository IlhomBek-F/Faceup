import React from "react"
import { BACKGROUND_LAYOUT_IMAGES } from '../../utils/constant';
import './backgroundLayout.css'

function BackgroundLayout({ children }) {

    return (
        <>
            <div className="container">
                {['itemLeft', 'itemRight', 'itemLeft', 'itemRight'].map((className: string, index) => {
                    return <div className="wrapper" style={{ zIndex: 4 }} key={index}>
                        {BACKGROUND_LAYOUT_IMAGES[index + 1].map((imageUrl: string, imageIndex: number) => {
                            return <div className={`${className} item${imageIndex + 1}`} key={imageIndex}>
                                <img className="img" src={imageUrl} alt="layout image" />
                            </div>
                        })}

                    </div>
                })}
            </div>
            {children}
        </>
    )
}

export { BackgroundLayout }