import React from 'react'

class Position extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <p>Cargo:</p>
        <textarea name="position" maxLength="40" required onChange={ handleChange } />
      </div>
    )
  }
}

export default Position;