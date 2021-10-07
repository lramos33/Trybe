import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar café', 'Treinar', 'Estudar', 'Atualizar GitHub']

class App extends React.Component {
  render() {
    return (
      <ul>{tasks.map((actualTask) => Task(actualTask))}</ul>
    )
  }
}

export default App;
