import React from 'react';
import './App.css';
import Pokedex from './pokedex';
import pokemons from "./data";

class App extends React.Component {
  render(){
    return (
      <div className="body">
        <h1 className="tittle">Pokedex</h1>
        <Pokedex pokemons={pokemons}/>
      </div>

    )
  }
}

export default App;
