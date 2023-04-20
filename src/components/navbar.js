import * as React from 'react';
import { hamburgerIcon, logoContainer, navbar, responsive } from './style.module.css';
import { Menu } from 'react-feather';

export default function Navbar() {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <div className={isOpen ? responsive : navbar}>
                <a href="#home" className={logoContainer}>CK</a>

                <a href="#products">Products</a>
                <a href="#about">About us</a>
                <a href="#reviews">Reviews</a>
                <button className={hamburgerIcon} onClick={() => {
                    setOpen(prevIsOpen => !prevIsOpen);
                }}>
                    <Menu size={17} />
                </button>
            </div >
        </>
    );
}

