const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
};

const personalForm = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PERSONAL_FORM':
    return {
      ...state,
      name: action.value,
    };
  default:
    return state;
  }
};

export default personalForm;
