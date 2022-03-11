import React from "react";
import {
    portfolio as portfolioList,
    portfolioItem
} from "./portfolio.module.scss";
import {images} from "../../assets/images";
import {portfolio} from "../../assets/config/portfolio";
import Section from "../section";
import {sections} from "../../assets/config/sections";

const Portfolio = () => {
    const {portfolio: portfolioSection} = sections;

    return (
        <Section {...portfolioSection}>
            <ul className={portfolioList}>
                {
                    portfolio.map(item => {
                        const Image = images[item.id];
                        return (
                            <li className={portfolioItem} key={item.id}>
                                <img src={Image} width={564} height={294} alt={item.name} title={item.name}/>
                            </li>
                        )
                    })
                }
            </ul>
        </Section>
    );
};

export default Portfolio;