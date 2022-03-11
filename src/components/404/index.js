import React from "react";
import {
    error,
    errorText,
    errorIcon,
    errorTitle
} from "./404.module.scss";
import Button from "../button";
import {icons} from "../../assets/icons";


const Error = () => {
    const {Error404} = icons;

    return (
        <main className={error}>
            <div>
                <h1 className={errorTitle}>Page not found</h1>
                <p className={errorText}>
                    Sorry we couldn’t find what you were looking for.
                </p>
                <Button text="Go home" link="/"/>
            </div>

            <div className={errorIcon}>
                <Error404/>
            </div>
        </main>
    );
};

export default Error;