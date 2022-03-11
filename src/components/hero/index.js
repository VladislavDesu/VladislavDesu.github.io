import React from "react";
import {author} from "../../assets/config/author";
import {fullName} from "../../assets/utils/utils";
import {
    hero,
    heroInfo,
    heroImg,
    heroName,
    heroPosition,
    heroBadge,
} from "./hero.module.scss";
import {images} from "../../assets/images";
import Section from "../section";
import {sections} from "../../assets/config/sections";

const Hero = () => {
    const {
        firstName,
        lastName,
        position,
        picture
    } = author;
    const {home: homeSection} = sections;

    const Image = images[picture];
    const name = fullName(firstName, lastName);

    return (
        <Section {...homeSection}>
            <div className={hero}>
                <div className={heroInfo}>
                    <span className={heroBadge}>Hello I'm</span>
                    <h2 className={heroName}>{name}</h2>
                    <h3 className={heroPosition}>{position}</h3>
                </div>

                <div className={heroImg}>
                    <img width={464} height={464} src={Image} title={name} alt={name}/>
                </div>
            </div>
        </Section>
    );
};

export default Hero;