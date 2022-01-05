import React from 'react'

class Description extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <p>Descrição do cargo:</p>
        <textarea name="description" maxLength="500" required onChange={ handleChange } />
      </div>
    )
  }
}

export default Description;