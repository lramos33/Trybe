import React from 'react'
import Name from './personal-components/Name'
import Email from './personal-components/Email'
import CPF from './personal-components/CPF'
import Address from './personal-components/Address'
import City from './personal-components/City'
import State from './personal-components/State'
import Type from './personal-components/Type'

class PersonalForm extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <fieldset>
          <h1>Dados pessoais:</h1>
            <Name handleChange={ handleChange } />
            <Email handleChange={ handleChange } />
            <CPF handleChange={ handleChange } />
            <Address handleChange={ handleChange } />
            <City handleChange={ handleChange } />
            <State handleChange={ handleChange } />
            <Type handleChange={ handleChange } />
        </fieldset>
      </div>
    )
  }
}

export default PersonalForm;