import React from "react";
import {
    header,
    headerHide,
    headerTitle
} from "./header.module.scss";

const SectionHeader = ({title}) => {
    return (
        <header className={`${header} ${title.isHide ? headerHide: ""}`}>
            <h2 className={headerTitle}>{title.name}</h2>
        </header>
    );
};

export default SectionHeader;