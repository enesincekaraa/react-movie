
import React from 'react'
import "./card.scss";

function Card({src, title, date}) {
    return (
        <div className="card">

            <img className="card__img" src={src}/>
            <p className="card__title">{title}</p>
            <p className="card__date">{date}</p>
        </div>
    )
}

export default Card