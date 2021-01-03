import React, { Component } from 'react';
import Card from '../card/card';

class List extends Component {
    state = {
        name: "eman"
    }

    changeName = (name) => {
        this.setState({
            name: name
        })
    }

    render () {
        return (
            <div className="list">
                <Card 
                    changed={this.changeName}
                    name={this.state.name}/>
            </div>
        )
    }
}

export default List;
