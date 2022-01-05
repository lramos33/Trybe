import React from 'react'
const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

class State extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <label> Estado:
          <select name="state" required onChange={ handleChange }>
            { states.map((state, index) => <option key={ index }>{ state }</option>) }
          </select>
        </label>
      </div>
    )
  }
}

export default State;