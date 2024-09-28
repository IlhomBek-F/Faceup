import { Button, Result } from "antd";
import React from "react";
import './not-found-image.css';
import { useImageContext } from "@context/ImageProvider";

function NotFoundImage() {
    const { handleBackHome } = useImageContext();

    return (
        <div className="empty">
            <Result
                status="404"
                subTitle="Sorry, the image you are looking for not exist."
                extra={<Button type="primary" onClick={handleBackHome}>Back Home</Button>}
            />
        </div>

    )
}

export { NotFoundImage }