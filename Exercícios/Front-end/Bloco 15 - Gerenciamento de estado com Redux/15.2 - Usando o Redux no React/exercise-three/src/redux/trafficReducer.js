import { CHANGE_SIGNAL } from "./actionCreators";

const INITIAL_STATE = {
  signal: {
    color: 'red',
  },
}

const trafficReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
};

export default trafficReducer;
