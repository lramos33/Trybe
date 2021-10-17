import React from 'react'
import Resume from './professional-components/Resume';
import Position from './professional-components/Position';
import Description from './professional-components/Description';

class ProfessionalForm extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div>
        <fieldset>
          <h1>Dados profissionais</h1>
          <Resume handleChange={ handleChange }/>
          <Position handleChange={ handleChange }/>
          <Description handleChange={ handleChange }/>
        </fieldset>
      </div>
    )
  }
}

export default ProfessionalForm;