import React from 'react';
import './card.scss';

const Card = (props) => {
    const changeName = (event) => {
        props.changed(event.target.value)
    }

    return <div className="card">
        {
            props.editMode ?
                <input onChange={changeName} value={props.title} /> : null
        }
        <p>{props.title}</p>
    </div>
}

export default Card;