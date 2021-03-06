import React, { Component } from 'react'
import Todo from './Todo'

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => (
        <Todo
          text={todo.text}
          id={todo.id}
          key={index}
          store={this.props.store}
        />
    ));

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
