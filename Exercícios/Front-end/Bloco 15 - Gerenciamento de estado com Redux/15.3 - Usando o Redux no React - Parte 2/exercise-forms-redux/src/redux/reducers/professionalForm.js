const INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const professionalForm = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PROFESSIONAL_FORM':
    return {
      ...state,
      curriculo: action.state.curriculo,
      cargo: action.state.cargo,
      descricao: action.state.descricao,
    };
  default:
    return state;
  }
};

export default professionalForm;
