import React, { Component } from 'react';
import Card from '../card/card';

class List extends Component {
    state = {
        people: [
            {
                name: "ayman",
                editingMode: false
            },
            {
                name: "eman",
                editingMode: false
            },
            {
                name: "laila",
                editingMode: false
            },
            {
                name: "Aly",
                editingMode: false
            }
        ]
    }

    changeName = (index, name) => {
        const peopleArr = [...this.state.people];
        peopleArr[index].name = name;

        this.setState({
            people: peopleArr
        })
    }

    toggleEdit = () => {
        const people = [...this.state.people];
        people.map(elem => {
            elem.editingMode = !elem.editingMode;
            return elem;
        })
        this.setState({
            people: people
        });
    }

    render() {
        return (
            <div className="list">
                <button onClick={this.toggleEdit}>{this.state.editingMode ? 'Save' : 'Edit'}</button>
                {
                    this.state.people.map((elem, index) => {
                        return <Card
                            key={index}
                            editMode={elem.editingMode}
                            changed={this.changeName.bind(this, index)}
                            name={elem.name} />
                    })
                }
            </div>
        )
    }
}

export default List;
