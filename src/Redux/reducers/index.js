import {combineReducers} from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

export default rootReducer = combineReducers({
  allUsers: userReducer,
  posts: postReducer,
  comments: commentReducer,
});
