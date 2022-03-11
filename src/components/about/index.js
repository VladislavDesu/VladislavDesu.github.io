import React from "react";
import List from "../section/list";
import Card from "../section/card";
import {convertPhoneNumber, fullName, generateInfo} from "../../assets/utils/utils";
import {titles} from "../../assets/config/titles";
import {author} from "../../assets/config/author";
import Section from "../section";
import {sections} from "../../assets/config/sections";
import {v4 as uuidv4} from "uuid";
import {about} from "../../assets/config/about";

const About = () => {
    const {
        firstName,
        lastName,
        age,
        languages,
        position,
        experience: {time: experience},
        phoneNumber,
        email,
        locate: {name: locate, link: locateLink}
    } = author;
    const {about: {card}} = titles;
    const {about: aboutSection} = sections;
    const {web: {desc}} = about;

    const name = fullName(firstName, lastName);
    const info = [
        {name},
        {age},
        {position},
        {experience},
        {languages},
        {phone: <a href={`tel: ${phoneNumber}`}>{convertPhoneNumber(phoneNumber)}</a>},
        {email: <a href={`mailto: ${email}`}>{email}</a>},
        {locate: <a rel="noreferrer" target="_blank" href={locateLink}>{locate}</a>}
    ];

    const item = [
        <Card title={card.about} info={[
            <>
                {
                    info.map(info => {
                        const key = uuidv4();
                        return generateInfo(info, key);
                    })
                }
            </>
        ]}/>,
        <Card title={card.web} info={[
            <>
                {
                    desc.map(info => {
                        const key = uuidv4();
                        return <p key={key}>{info}</p>
                    })
                }
            </>
        ]}/>
    ];

    return (
        <Section {...aboutSection}>
            <List item={item}/>
        </Section>
    );
};

export default About;