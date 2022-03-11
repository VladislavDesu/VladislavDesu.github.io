import React from "react";
import {
    card,
    cardTitle,
    cardInfo
} from "./card.module.scss";
import {v4 as uuidv4} from 'uuid';

const Card = ({title, info}) => {
    return (
        <div className={card}>
            <h3 className={cardTitle}>{title}</h3>
            {
                info.map(info => {
                    const key = uuidv4();
                    return (
                        <div key={key} className={cardInfo}>
                            {info}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Card;