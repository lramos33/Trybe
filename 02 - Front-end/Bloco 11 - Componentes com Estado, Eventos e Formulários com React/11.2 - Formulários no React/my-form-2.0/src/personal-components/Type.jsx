import React from 'react'

class Type extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        Tipo:
        <label>
          <input type="radio" name="type" value="casa" onChange={ handleChange }></input>Casa
        </label>
        <label>
          <input type="radio" name="type" value="apartamento" onChange={ handleChange }></input>Apartamento
        </label>
      </div>
    )
  }
}

export default Type;