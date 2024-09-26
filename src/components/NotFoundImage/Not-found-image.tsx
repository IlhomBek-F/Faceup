import { Button, Result } from "antd";
import React from "react";
import './not-found-image.css';

function NotFoundImage() {

    return (
        <div className="empty">
            <Result
                status="404"
                subTitle="Sorry, the image you are looking for not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        </div>

    )
}

export { NotFoundImage }