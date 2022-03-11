import React from "react";
import {Link} from "gatsby";
import {
    logotype
} from "./logo.module.scss";
import {author} from "../../assets/config/author";

const Logo = ({handleClick}) => {
    const {nickname} = author;
    
    return <Link onClick={handleClick} className={logotype} to="/">{nickname}</Link>
};

export default Logo;