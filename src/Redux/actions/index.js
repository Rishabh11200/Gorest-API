import {GET_USERS, GET_POSTS, GET_COMMENTS} from '../../constants/actionTypes';
import {getComment, getPost, getUsers} from '../../Api/Application';

export function setUsers(users) {
  return {
    type: GET_USERS,
    payload: users,
  };
}
export const getUser = page => dispatch => {
  getUsers(page).then(result => {
    dispatch(setUsers(result));
  });
};
export function setPosts(post) {
  return {
    type: GET_POSTS,
    payload: post,
  };
}
export const getPosts = id => dispatch => {
  getPost(id).then(res => {
    dispatch(setPosts(res));
  });
};
export function setComment(comment) {
  return {
    type: GET_COMMENTS,
    payload: comment,
  };
}
export const getComments = id => dispatch => {
  getComment(id).then(res => {
    dispatch(setComment(res));
  });
};
