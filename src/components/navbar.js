import * as React from 'react';
import { hamburgerIcon, logoContainer, navbar, responsive } from './style.module.css';
import { Menu } from 'react-feather';
import { Link } from "gatsby";

export default function Navbar() {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <nav>
            <div className={isOpen ? responsive : navbar}>
                <Link to="/" className={logoContainer}>CK</Link>

                <Link to="#products">Products</Link>
                <Link to="#about">About us</Link>
                <Link to="#reviews">Reviews</Link>
                <button className={hamburgerIcon} onClick={() => {
                    setOpen(prevIsOpen => !prevIsOpen);
                }}>
                    <Menu size={17} />
                </button>
            </div >
        </nav>
    );
}

