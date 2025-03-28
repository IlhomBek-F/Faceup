
import { ReactNode } from 'react';
import React from 'react';
import './imageColumn.css';

function ImageColumn({ children, index }: { children: ReactNode, index: number }) {
    return (
        <div className={`image-column-${index + 1}`}>
            {children}
        </div>
    )
}

export { ImageColumn }