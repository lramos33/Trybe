const INITIAL_STATE = {
  name: '',
};

const professionalForm = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PROFESSIONAL_FORM':
    return {
      ...state,
      name: action.value,
    };
  default:
    return state;
  }
};

export default professionalForm;
