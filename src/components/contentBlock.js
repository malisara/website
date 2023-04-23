import * as React from 'react';
import { whiteTitle, purpleTitle } from './style.module.css';

export default function ContentBlock({ title, children, skewedSection, id }) {
    return (
        <section id={id}>
            <h2 className={skewedSection ? whiteTitle : purpleTitle}>{title}</h2>
            {children}
        </section>
    );
}