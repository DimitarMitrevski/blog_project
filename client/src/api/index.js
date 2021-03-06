import axios from 'axios';

const url = 'https://fikt.herokuapp.com/posts';
export const fetchPosts = async() => await axios.get(url);
export const createPost = async(newPost) => await axios.post(url, newPost);
export const likePost = async(id) => await axios.patch(`${url}/${id}/likePost`);
export const updatePost =async (id, updatedPost) =>await axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = async(id) =>await axios.delete(`${url}/${id}`);