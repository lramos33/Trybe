const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const personalForm = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PERSONAL_FORM':
    return {
      ...state,
      nome: action.state.nome,
      email: action.state.email,
      cpf: action.state.cpf,
      endereco: action.state.endereco,
      cidade: action.state.cidade,
      estado: action.state.estado,
    };
  default:
    return state;
  }
};

export default personalForm;
