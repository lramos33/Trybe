import { Component } from "react";

class Pokemon extends Component {
  render() {
    const {pokemon} = this.props

    return (
      <div className="pokemon">
        <div>
          <p className="content">{pokemon.name}</p>
          <p className="content">{pokemon.type}</p>
          <p className="content">{`Average Weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
        </div>
        <img src={pokemon.image} alt={`${pokemon.name} sprite`}/>
      </div>
    )
  }
}

export default Pokemon