import classNames from 'classnames';
import React from 'react'
import "./card.scss";

function Card({ src, title, date, vote }) {

    const colorClass = classNames({
        'card__vote': true,
        'card__vote--min' : vote <= 4,
        'card__vote--max': vote > 7,
        'card__vote--medium':  vote > 4 && vote < 7,

    })

    return (
        <div className="card">

            <div className="card__imgContainer">
                <div className="card__voteContainer">
                    <div className={colorClass}>
                        <span>
                            {vote}

                        </span>
                    </div>
                </div>
                <img className="card__img" src={src} />

            </div>
            <p className="card__title">{title}</p>
            <p className="card__date">{date}</p>
        </div>
    )
}

export default Card