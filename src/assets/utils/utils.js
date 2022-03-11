import React from "react";

export const generateSocials = (socials) => socials.map(social => {
    const key = Object.keys(social)[0];
    return {link: social[key], name: toCapitalize(key)}
});

export const convertPhoneNumber = (phoneNumber) => {
    const cleanPhone = phoneNumber.replace(/[^\d]/g, "");
    return cleanPhone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "+38($1)-$2-$3-$4");
}

export const fullName = (firstName, lastName) => firstName + " " + lastName;

export const getKey = (obj) => Object.keys(obj)[0];

export const toCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const generateInfo = (info, key) => {
    const name = Object.keys(info)[0];

    return <p key={key}>
        {toCapitalize(name) + ": "}
        {info[name]}
    </p>
};