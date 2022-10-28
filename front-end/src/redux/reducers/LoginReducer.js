import { SET_USER_PASSWORD, SET_USER_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  case SET_USER_PASSWORD:
    return {
      ...state,
      password: action.password,
    };
  default:
    return state;
  }
};

export default player;
