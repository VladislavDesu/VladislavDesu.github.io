import React from 'react';
import List from "../section/list";
import {titles} from "../../assets/config/titles";
import Card from "../section/card";
import {experience} from "../../assets/config/experience";
import {education} from "../../assets/config/education";
import Section from "../section";
import {sections} from "../../assets/config/sections";
import { v4 as uuidv4 } from 'uuid';

const Experience = () => {
    const {experience: {card}} = titles;
    const {experience: experienceSection} = sections;

    const generateExperience = (item) => (
        <>
            <h4>{item.position} at <a href={item.link} rel="noreferrer" target="_blank">{item.company}</a></h4>
            <time>{item.date}</time>
            <p>Responsibility :</p>
            <ul>
                {
                    item.list.map(text => {
                        const key = uuidv4();
                        return <li key={key}>{text}</li>
                    })
                }
            </ul>
        </>
    );

    const generateEducation = (item) => (
        <>
            <h4>{item.speciality} at <a href={item.link} rel="noreferrer" target="_blank">{item.institution}</a></h4>
            <time>{item.date}</time>
            {
                item.desc.map(text => {
                    const key = uuidv4();
                    return <p key={key}>{text}</p>;
                })
            }
        </>
    );

    const item = [
        <Card title={card.work} info={experience.map(item => generateExperience(item))}/>,
        <Card title={card.education} info={education.map(item => generateEducation(item))}/>
    ];

    return (
        <Section {...experienceSection}>
            <List item={item}/>
        </Section>
    );
};

export default Experience;