import { Flex, Spin, Button } from "antd";
import { cancelRequest } from "../../service";
import './downloadSpin.css';
import React from "react";

function DownloadSpin() {
    return (
        <Flex className='spin' vertical gap='30px'>
            <Spin />
            <Button type="primary" onClick={cancelRequest} >Cancel download</Button>
        </Flex>
    )
}

export {DownloadSpin}