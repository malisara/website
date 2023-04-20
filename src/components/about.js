import * as React from 'react';
import { productDescription, contactUs, contactSection, grayIcons, someSection } from './style.module.css';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'react-feather';


export default function AboutUs() {

    return (
        <>


            <div className={productDescription}>
                <p>
                    Welcome to our family-owned cake business located in sunny
                    California! We started our journey as a small local store 10
                    years ago and have since grown into a team of skilled bakers
                    who love to create beautiful and delicious cakes for our
                    customers.
                </p>

                <p>
                    At our bakery, we take pride in using only the highest quality
                    ingredients and incorporating unique flavors to make your cake
                    experience truly special. Our team of professional bakers has
                    undergone extensive training and holds many certificates in
                    the art of cake making.
                </p>

                <p>
                    Whether you're celebrating a special occasion or simply looking
                    to satisfy your sweet tooth, we're here to create the perfect
                    cake for you. Come visit us and experience the love and care
                    that goes into every cake we make!
                </p>

                <hr></hr>

            </div>


            <div className={contactUs}>
                <h3>Contact</h3>

                <div className={contactSection}>
                    <Phone className={grayIcons} />
                    <p>+0123456789</p>
                </div>

                <div className={contactSection}>
                    <Mail className={grayIcons} />
                    <p>fake.mail@dontsend.anything</p>
                </div>

                <div className={contactSection}>
                    <MapPin className={grayIcons} />
                    <p>Fake Address, NoMansLand 0, Earth</p>
                </div>

                <div className={someSection}>
                    <a href='/#' aria-label="link to Instagram"><Instagram className={grayIcons} /></a>
                    <a href='/#' aria-label="link to Facebook"><Facebook className={grayIcons} /></a>
                </div>

            </div >
        </>
    );
}
