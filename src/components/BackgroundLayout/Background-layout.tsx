import React from "react"
import './background-layout.css'

function BackgroundLayout({ children }) {

    return (
        <>
            <div style={{ position: 'relative' }}>
                <div className="wrapper" style={{ zIndex: 4 }}>
                    <div className="itemLeft item1">
                        <img className="img" src="https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=220" />
                    </div>
                    <div className="itemLeft item2"></div>
                    <div className="itemLeft item3"></div>
                    <div className="itemLeft item4"></div>
                    <div className="itemLeft item5"></div>
                    <div className="itemLeft item6"></div>
                    <div className="itemLeft item7"></div>
                    <div className="itemLeft item8"></div>
                </div>
                <div style={{
                    background: 'linear-gradient(90deg, rgb(41, 41, 44) 0%, rgb(64, 64, 64) 34%, rgba(47,50,51,1) 100%)',
                    position: 'absolute', zIndex: 5, display: 'flex', justifyContent: 'center', width: '100%'
                }}>
                    {children}
                </div>
            </div >


            {/* <div className="wrapper">
                <div className="itemRight item1"></div>
                <div className="itemRight item2"></div>
                <div className="itemRight item3"></div>
                <div className="itemRight item4"></div>
                <div className="itemRight item5"></div>
                <div className="itemRight item6"></div>
                <div className="itemRight item7"></div>
                <div className="itemRight item8"></div>
            </div> */}
        </>

    )
}

export { BackgroundLayout }