export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const saveUserPwdAction = (password) => ({
  type: SET_USER_PASSWORD,
  password,
});

export const saveUserEmailAction = (email) => ({
  type: SET_USER_EMAIL,
  email,
});
