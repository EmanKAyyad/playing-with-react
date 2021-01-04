import React from 'react';
import './card.css';

const Card = (props) => {
    const changeName = (event) => {
        props.changed(event.target.value)
    }

    return <div className="card">
        {
            props.editMode ?
                <input onChange={changeName} value={props.name} /> : null
        }
        <p>{props.name}</p>
    </div>
}

export default Card;