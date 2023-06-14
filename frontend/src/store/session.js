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

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
  }
  
  const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
  }

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

  export const signup = user => async (dispatch) => {
    let response = await csrfFetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user)
    });
    let data = await response.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(receiveCurrentUser(data.user));
};

  export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(receiveCurrentUser(data.user));
    return response;
  };


const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
 };

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