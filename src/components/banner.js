import * as React from 'react';
import { banner, bannerText } from './style.module.css';

export default function Banner() {

    return (
        <>
            <div className={banner}>
                <div className={bannerText}>
                    <h1>My awesome business</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse consectetur viverra ultrices. Nullam vitae
                        elit sit amet neque ultrices tempus non id massa.
                        Donec eget neque at nisl tincidunt bibendum. </p>
                </div>
            </div>
        </>
    );
}
