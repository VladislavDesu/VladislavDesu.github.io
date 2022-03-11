import React from "react";
import {
    list,
} from "./list.module.scss";
import { v4 as uuidv4 } from "uuid";

const List = ({item}) => {
    return (
        <ul className={list}>
            {
                item.map(item => {
                    const key = uuidv4();
                    return <li key={key}>{item}</li>
                })
            }
        </ul>
    );
};

export default List;