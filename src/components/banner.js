import * as React from 'react';
import { banner, bannerText } from './style.module.css';

export default function Banner() {

    return (
        <>
            <div className={banner}>
                <div className={bannerText}>
                    <h1>Cakealicious</h1>
                    <p>Welcome to our cake store, where we make cakes so delicious
                        they'll make your taste buds dance the Macarena!
                        Our cakes are baked with the freshest ingredients,
                        sprinkled with love and topped with a cherry of awesomeness.
                    </p>

                    <p>Don't settle for mediocre cake, when you can have a slice of pure bliss.</p>
                </div>
            </div>
        </>
    );
}
