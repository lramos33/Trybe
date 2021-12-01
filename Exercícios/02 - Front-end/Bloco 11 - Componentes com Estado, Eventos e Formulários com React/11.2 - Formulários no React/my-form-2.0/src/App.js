import React from 'react'
import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm'
import DataField from './DataField';

const initialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  type: '',
  resume: '',
  position: '',
  description: '',
  submitted: false,
}

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.clearForm = this.clearForm.bind(this);

    this.state = initialState
  }

  handleChange({ target }) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if (name === 'name') {
      value = value.toUpperCase();
    }
    
    this.setState({
      [name]: value,
    })
  }

  submitForm() {
    this.setState({
      submitted: true,
    })
  }

  clearForm() {
    this.setState(initialState)
  }

  render() {
    return (
      <form>
        <PersonalForm handleChange={ this.handleChange } submitForm ={ this.submitForm } clearForm ={ this.clearForm } />
        <ProfessionalForm handleChange={ this.handleChange }/>
        <input type="button" value="Enviar" onClick={ this.submitForm }></input>
        <input type="reset" value="Limpar" onClick={ this.clearForm }></input>
        {this.state.submitted && <DataField state={ this.state }/>}
      </form>
    )
  }
}

export default App;