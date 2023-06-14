import csrfFetch from './csrf';

const RECEIVE_CURRENT_USER = 'session/receiveCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: user
  };
};

const removeCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  };
};

export const login = (user) => async (dispatch) => {
  let response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  let data = await response.json();
  sessionStorage.setItem('currentUser', JSON.stringify(data.user));
  dispatch(receiveCurrentUser(data.user));
};

export const logout = userId => async (dispatch) => {
    let response = await csrfFetch('/api/session', {
      method: 'DELETE'
    });
    sessionStorage.setItem('currentUser', null);
    dispatch(removeCurrentUser(userId));
  }

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...state, user: action.payload };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;