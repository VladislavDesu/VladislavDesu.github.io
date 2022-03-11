import React from "react";
import {
    contacts,
    contactsItem,
    contactsTitle,
    contactsIcon,
} from "./contacts.module.scss";
import {icons} from "../../assets/icons";
import {toCapitalize} from "../../assets/utils/utils";
import {convertPhoneNumber} from "../../assets/utils/utils";
import {author} from "../../assets/config/author";
import {socials} from "../../assets/config/socials";
import Section from "../section";
import {sections} from "../../assets/config/sections";
import { v4 as uuidv4 } from 'uuid';

const Contacts = () => {
    const {phoneNumber, email} = author;
    const [telegram, linkedin] = socials;
    const {contacts: contactsSection} = sections;

    const contactsLinks = [
        {telegram: <a target="_blank" rel="noreferrer" href={telegram.telegram}>Write Me Now</a>},
        {linkedin: <a target="_blank" rel="noreferrer" href={linkedin.linkedin}>Write Me Now</a>},
        {email: <a href={`mailto: ${email}`}>{email}</a>},
        {phone: <a href={`tel: ${phoneNumber}`}>{convertPhoneNumber(phoneNumber)}</a>},
    ];

    return (
        <Section {...contactsSection}>
            <ul className={contacts}>
                {
                    contactsLinks.map(info => {
                        const name = Object.keys(info)[0];
                        const text = toCapitalize(name);
                        const Icon = icons[text];
                        const key = uuidv4();

                        return (
                            <li key={key} className={contactsItem}>
                            <span className={contactsIcon}>
                                <Icon/>
                            </span>
                                <h3 className={contactsTitle}>{text}</h3>
                                {info[name]}
                            </li>
                        )
                    })
                }
            </ul>
        </Section>
    );
};

export default Contacts;