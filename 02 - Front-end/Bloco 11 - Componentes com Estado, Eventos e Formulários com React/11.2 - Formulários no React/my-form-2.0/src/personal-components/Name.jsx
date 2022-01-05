import React from 'react'

class Name extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <label> Nome:
          <input type="text" name="name" maxLength="40" required onChange={ handleChange }></input>
        </label>
      </div>
    )
  }
}

export default Name;