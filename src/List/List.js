import React, { Component } from 'react';
import Card from '../card/card';

class List extends Component {
    state = {
        name: "eman",
        editingMode: false
    }

    changeName = (name) => {
        this.setState({
            name: name
        })
    }

    toggleEdit = () => {
        const editMode =  !this.state.editingMode;
        this.setState({
            editingMode: editMode
        });
    }

    render () {
        return (
            <div className="list">
                <button onClick={this.toggleEdit}>{ this.state.editingMode ? 'Save' : 'Edit'}</button>
                <Card 
                    editMode={this.state.editingMode}
                    changed={this.changeName}
                    name={this.state.name}/>
            </div>
        )
    }
}

export default List;
