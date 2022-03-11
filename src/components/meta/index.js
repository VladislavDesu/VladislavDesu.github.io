import React from "react";
import {Helmet} from "react-helmet";

const Meta = () => {
    return (
        <Helmet htmlAttributes={{
            lang: "en",
        }}>
            <title>Portfolio: Vladislav Gryadko / Frontend Developer</title>
            <meta name="description"
                  content="Hello I am Vladislav Gryadko ... I am a Frontend Developer, visit my portfolio website for more information about me and my skills. My email vgryadko@gmail.com"/>
            <meta name="robots" content="index, follow"/>
            <meta name="keywords"
                  content="html,css,js,react,work,portfolio,education,work experience,technical skills,soft skills,about me,web development,frontend,contacts,web3,blockchain,ethereum,polygon,nft,solidity"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="English"/>
            <meta name="revisit-after" content="2 days"/>
            <meta name="author" content="Vladislav Gryadko"/>
        </Helmet>
    );
};

export default Meta;