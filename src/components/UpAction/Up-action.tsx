import React from 'react';
import { Button } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import { useScroll } from '../../hooks/useScroll';
import './up-action.css';

function UpAction() {
    const { goTop, isVisible } = useScroll();

    return (
        isVisible && <Button className='up' onClick={goTop}><CaretUpOutlined /></Button>
    )
}

export { UpAction }