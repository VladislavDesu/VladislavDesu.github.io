import React from "react";
import Container from "../container";
import {
    footer,
    footerList,
    footerItem,
    footerLink,
    footerCopyright
} from "./footer.module.scss";
import {author} from "../../assets/config/author";
import {icons} from "../../assets/icons";
import {generateSocials} from "../../assets/utils/utils";
import {socials} from "../../assets/config/socials";
import {v4 as uuidv4} from 'uuid';

const Footer = () => {
    const {nickname} = author;
    const year = new Date().getFullYear();
    const socialsArr = generateSocials(socials);

    return (
        <footer className={footer}>
            <Container>
                <ul className={footerList}>
                    {
                        socialsArr.map(item => {
                            const Icon = icons[item.name];
                            const key = uuidv4();
                            return (
                                <li key={key} className={footerItem}>
                                    <a target="_blank" rel="noreferrer" className={footerLink} href={item.link}>
                                        <Icon/>
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>

                <p className={footerCopyright}>&copy; Copyright {year} {nickname}. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;