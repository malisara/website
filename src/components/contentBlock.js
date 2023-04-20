import * as React from 'react';
import { whiteTitle, purpleTitle } from './style.module.css';

export default function ContentBlock({ title, children, skewedSection, id }) {
    return (
        <>
            <h2 id={id} className={skewedSection ? whiteTitle : purpleTitle}>{title}</h2>
            {children}
        </>
    );
}