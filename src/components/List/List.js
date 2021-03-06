import React, { Component } from 'react';
import Card from '../card/card';
import restService from '../../services/_rest';

class List extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    restService.getPosts()
      .then((response) => {
        if (response && response.status === 200) {
          const data = response.data.map(item => {
            item.editingMode = false
            return item;
          })

          this.setState({
            posts: data
          })
        }
      });
  }

  changeName = (index, title) => {
    const postsArr = [...this.state.posts];
    postsArr[index].title = title;

    this.setState({
      posts: postsArr
    })
  }

  toggleEdit = () => {
    const posts = [...this.state.posts];
    posts.map(elem => {
      elem.editingMode = !elem.editingMode;
      return elem;
    })
    this.setState({
      posts: posts
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.toggleEdit}>{(this.state.posts.length > 0 && this.state.posts[0].editingMode) ? 'Save' : 'Edit'}</button>
        {
          this.state.posts.map((elem, index) => {
            return <Card
              key={index}
              editMode={elem.editingMode}
              changed={this.changeName.bind(this, index)}
              title={elem.title} />
          })
        }
      </React.Fragment>
    )
  }
}

export default List;
