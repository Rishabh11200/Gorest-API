import {GET_USERS} from '../../constants/actionTypes';

const initialState = {
  users: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
};
export default userReducer;
