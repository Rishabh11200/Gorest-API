import {api} from './BaseURL';

export const getUsers = async page => {
  let userList;
  const res = await api.get(`/users?page=${page}`);
  userList = res.data.data;
  return userList;
};

export const getPost = async id => {
  let postList;
  const res = await api.get(`/users/${id}/posts`);
  postList = res.data.data;
  return postList;
};

export const getComment = async id => {
  let coList;
  const res = await api.get(`/posts/${id}/comments`);
  coList = res.data.data;
  return coList;
};

export const addComment = async (postid, data) => {
  const res = await api.post(`/posts/${postid}/comments`, {
    post_id: data.postid,
    name: data.name,
    email: data.email,
    body: data.body,
  });
  return res;
};
