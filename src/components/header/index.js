import React, {useEffect, useState} from "react";
import Container from "../container";
import {
    header,
    headerBtn,
    headerNav,
    headerLink,
    headerList,
    headerItem,
    headerWrapper,
    headerNavOpen,
    overlayHidden,
    headerBtnClose
} from "./header.module.scss";
import Logo from "../logo";
import {nav} from "../../assets/config/nav";
import {toCapitalize} from "../../assets/utils/utils";
import {Link} from "gatsby";
import {v4 as uuidv4} from 'uuid';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(state => !state);
        document.body.classList.toggle(overlayHidden);
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove(overlayHidden);
    };

    useEffect(() => {
        const checkSize = () => {
            if (document.body.offsetWidth >= 768) {
                closeMenu();
            }
        };

        window.addEventListener("resize", checkSize);

        return () => window.removeEventListener("resize", checkSize);
    }, []);

    return (
        <header className={header}>
            <Container>
                <div className={headerWrapper}>
                    <Logo handleClick={closeMenu}/>

                    <button
                        className={`${headerBtn} ${isOpen ? headerBtnClose : ""}`}
                        aria-label={"Open menu"}
                        onClick={openMenu}
                    />

                    <nav className={`${headerNav} ${isOpen ? headerNavOpen : ""}`}>
                        <ul className={headerList}>
                            {
                                nav.map(item => {
                                    const key = uuidv4();
                                    return (
                                        <li key={key} className={headerItem}>
                                            <Link onClick={closeMenu} className={headerLink}
                                                  to={"#" + item}>{toCapitalize(item)}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;