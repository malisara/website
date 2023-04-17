import * as React from 'react';
import { productDiv, productsDiv, productImage } from './style.module.css';
import { StaticImage } from 'gatsby-plugin-image';

export default function Products() {
    return (
        <>
            <div className={productsDiv}>
                <div className={productDiv}>
                    <StaticImage src='../images/one.png' alt='image one' className={productImage} />
                    <h3>ChocoOverload</h3>
                    <div>
                        <span>$10.00</span>
                    </div>
                </div>

                <div className={productDiv}>
                    <StaticImage src='../images/two.png' alt='image two' className={productImage} />
                    <h3>BerryChocoBliss</h3>
                    <div>
                        <span>$10.00</span>
                    </div>
                </div>

                <div className={productDiv}>
                    <StaticImage src='../images/three.png' alt='image three' className={productImage} />
                    <h3>BerryDream</h3>
                    <div>
                        <span>$10.00</span>
                    </div>
                </div>
            </div>;
        </>
    );
}







