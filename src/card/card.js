import React from 'react';

const Card = (props) => {
    const changeName = (event) => {
        props.changed(event.target.value)
    }
    
    return <div className="card">
        <input onChange={changeName} />
        <p>{props.name}</p>
    </div>
}

export default Card;