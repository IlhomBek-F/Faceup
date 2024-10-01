import React from "react"
import { Button } from "antd";
import { useImageContext } from "../../context/ImageProvider";
import './show-more.css';

function ShowMoreAction() {
    const { loadMore, loadingMore } = useImageContext()

    return (
        <footer className="footer">
            <Button type="dashed" onClick={loadMore} loading={loadingMore}>Show more</Button>
        </footer>
    )
}

export { ShowMoreAction }