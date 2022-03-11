import React from "react";
import {skills} from "../../assets/config/skills";
import {titles} from "../../assets/config/titles";
import Card from "../section/card";
import List from "../section/list";
import Section from "../section";
import {sections} from "../../assets/config/sections";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
    const {
        soft,
        technical
    } = skills;
    const {skills: skillsSection} = sections;
    const {skills: {card}} = titles;

    const item = [
        <Card title={card.technical} info={[
            <ul>
                {
                    technical.map(text => {
                        const key = uuidv4();
                        return <li key={key}>{text}</li>;
                    })
                }
            </ul>
        ]}/>,
        <Card title={card.soft} info={[
            <ul>
                {
                    soft.map(text => {
                        const key = uuidv4();
                        return <li key={key}>{text}</li>;
                    })
                }
            </ul>
        ]}/>,
    ];

    return (
        <Section {...skillsSection}>
            <List item={item}/>
        </Section>
    );
};

export default Skills;