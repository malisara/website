import * as React from 'react';


export default function ContentBlock({ title, children }) {
    return (
        <>
            <h2>{title}</h2>
            {children}
        </>
    );
}