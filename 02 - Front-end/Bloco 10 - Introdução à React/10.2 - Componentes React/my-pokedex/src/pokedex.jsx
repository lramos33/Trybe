import { Component } from "react";
import Pokemon from "./pokemon";

class Pokedex extends Component {
  render() {
    const {pokemons} = this.props

    return (
      <div className="pokedex">
        {pokemons.map((pokemon) => <Pokemon pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex