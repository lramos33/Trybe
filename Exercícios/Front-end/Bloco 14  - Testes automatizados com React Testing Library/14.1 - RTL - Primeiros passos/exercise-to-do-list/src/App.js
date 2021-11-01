import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectTasks: [],
      disableRemoveButton: true,
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTask = (task) => {
    this.setState((state) => ({ 
      selectTasks: [...state.selectTasks, task],
      disableRemoveButton: false,
    }));
  }

  removeButtonClick = () => {
    const { listTodo, selectTasks } = this.state;
    const filteredTodo = listTodo.filter((task) => selectTasks.indexOf(task) < 0)
    this.setState({ 
      listTodo: filteredTodo,
      disableRemoveButton: true,
    })
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <input data-testid="id-remove" type="button" value="Remover" disabled={ this.state.disableRemoveButton } onClick={ this.removeButtonClick } />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={ index + 1 }>
                  <Item content={ todo } clickTaskCallback={ this.selectTask }/>
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
