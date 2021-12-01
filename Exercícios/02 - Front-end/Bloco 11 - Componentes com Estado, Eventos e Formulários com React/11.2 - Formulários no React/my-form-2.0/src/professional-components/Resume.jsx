import React from 'react'

class Resume extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <p>Resumo do currículo:</p>
        <textarea name="resume" maxLength="1000" required onChange={ handleChange } />
      </div>
    )
  }
}

export default Resume;