import * as React from 'react';
import { productDiv, productDescription, productsDiv, productImage } from './style.module.css';
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

            <div className={productDescription}>

                Looking for a reason to indulge in some cake? Look no further!
                Our cakes are so delicious, they'll make you forget all about your diet.
                But don't worry, we won't judge. In fact, we encourage it!
                Our cakes are made with only the finest ingredients,
                and our bakers put love and care into every single bite. So go ahead,
                order that cake you've been eyeing. You deserve it! And if anyone asks,
                just tell them it's for the good of your soul (and your taste buds).


            </div>
        </>
    );
}







