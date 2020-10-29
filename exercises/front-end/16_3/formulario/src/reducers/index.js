import SET_FORMS from '../utilidades';

const INITIAL_STATE = {
  username: null,
  email: null,
  preference: null
}

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FORMS:
      return { ...state, ...action.payload }; //payload vem da action
    default:
      return state;
  }
}

export default formReducer;
