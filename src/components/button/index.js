import React from "react";
import {Link} from "gatsby";
import {button} from "./button.module.scss";

const Button = ({link, text}) => {
    return (
        <Link className={button} to={link}>{text}</Link>
    );
};

export default Button;