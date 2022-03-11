import React from "react";
import SectionHeader from "./header";
import {
    section,
    sectionDark
} from "./section.module.scss";
import Container from "../container";

const Section = ({children, title, id, dark}) => {
    return (
        <section id={id} className={`${section} ${dark ? sectionDark: ""}`}>
            <Container>
                {
                    title ? <SectionHeader title={title}/>: null
                }
                {children}
            </Container>
        </section>
    );
};

export default Section;