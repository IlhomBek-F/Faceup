import React, { useContext } from "react"
import './footer.css';
import { Button } from "antd";
import { useImageContext } from "../../context/ImageProvider";

export default function Footer() {
    const { loadMore, loadingMore } = useImageContext()

    return (
        <div className="footer">
            <Button type="dashed" onClick={loadMore} loading={loadingMore}>Show more</Button>
        </div>
    )
}