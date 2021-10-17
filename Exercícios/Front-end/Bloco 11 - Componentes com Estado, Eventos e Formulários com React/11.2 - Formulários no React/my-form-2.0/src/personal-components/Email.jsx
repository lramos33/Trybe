import React from 'react'

class Email extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <label> Email: 
          <input type="email" name="email" maxLength="50" required onChange={ handleChange }></input>
        </label>
      </div>
    )
  }
}

export default Email;