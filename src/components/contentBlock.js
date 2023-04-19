import * as React from 'react';
import { whiteTitle, purpleTitle } from './style.module.css';

export default function ContentBlock({ title, children, skewedSection }) {
    return (
        <>
            <h2 className={skewedSection ? whiteTitle : purpleTitle}>{title}</h2>
            {children}
        </>
    );
}