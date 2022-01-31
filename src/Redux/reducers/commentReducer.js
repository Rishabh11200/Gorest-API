import {GET_COMMENTS} from '../../constants/actionTypes';

const initialState = {
  comment: [],
};
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comment: action.payload,
      };
    default:
      return state;
  }
};
export default commentReducer;
