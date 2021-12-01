import React from 'react'

class CPF extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <label> CPF:
          <input type="text" name="cpf" maxLength="11" required onChange={ handleChange }></input>
        </label>
      </div>
    )
  }
}

export default CPF;