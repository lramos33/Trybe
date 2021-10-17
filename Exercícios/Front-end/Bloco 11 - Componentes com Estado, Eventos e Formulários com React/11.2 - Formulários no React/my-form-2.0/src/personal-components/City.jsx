import React from 'react'

class City extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <label> Cidade:
          <input type="text" name="city" maxLength="28" required onChange={ handleChange }></input>
        </label>
      </div>
    )
  }
}

export default City;