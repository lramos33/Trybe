import React from 'react'

class Address extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <label> Endereço:
          <input type="text" name="address" maxLength="200" required onChange={ handleChange }></input>
        </label>
      </div>
    )
  }
}

export default Address;