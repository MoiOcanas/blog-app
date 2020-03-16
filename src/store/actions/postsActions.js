import axios from 'axios';
import {
    GET_POSTS,
    GET_POST,
    POST_DONE,
    DELETE_DONE,
    POST_VISITED,
    UPDATE_DONE
} from "./actionTypes";
import reverse from '@arr/reverse';
import moveItem from'array-move-item';

/* 
    Method to get the posts from the API 
    Parameters: none
*/
export const getPosts = () => {
    return async dispatch => {
       await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=8")
            .then(res => {
                let posts = reverse(res.data);
                dispatch(getPostsSuccess(posts));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

/* 
    Method to get an individual post from the API 
    Parameters: postId
*/
export const getPost = postId => {
    return async dispatch => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}?_limit=8`)
            .then(res => {
                let posts = reverse(res.data);
                dispatch(getPostSuccess(posts));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

/* 
    Method to create a new post 
    Parameters: post: {
        title,
        body
    }
*/
export const createPost = post => {
    return async dispatch => {
        await axios.post("https://jsonplaceholder.typicode.com/posts", post)
            .then(res => {
                dispatch(postDone(post));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

/* 
    Method to uptdate an individual post
    Parameters: post: {
        title,
        body
    }
*/
export const updatePost = (id, post) => {
    return async dispatch => {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, post)
            .then(res => {
                dispatch(updateDone(post));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

/* 
    Method to delete a post
    Parameters: postId
*/
export const deletePost = postId => {
    return async dispatch => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => {
                dispatch(postDeleted(postId));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

/* 
    Method to set a post as visited or readed
    Parameters: index (post position in posts array)
*/
export const addPostVisited = index => {
    return async dispatch => {
       await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=8")
            .then(res => {
                let posts = reverse(res.data);
                let newPosts = moveItem(posts, index, posts.length);
                console.log(newPosts)
                dispatch(postVisited(newPosts));
            })
            .catch(err => {
                console.log(err)
            });
    };
};

//Method to pass the POST_VISITED action's parameters to the reducer
const postVisited = posts => {
    return {
        type: POST_VISITED,
        payload: {
            posts
        }
    };
};

//Method to pass the DELETE_DONE action's parameters to the reducer
const postDeleted = postId => {
    return {
        type: DELETE_DONE,
        payload: {
            postId
        }
    };
};

//Method to pass the GET_POSTS action's parameters to the reducer
const getPostsSuccess = posts => {
    return {
        type: GET_POSTS,
        payload: {
            posts
        }
    };
};

//Method to pass the POST_DONE action's parameters to the reducer
const postDone = post => {
    return {
        type: POST_DONE,
        payload: {
            post
        }
    };
};

//Method to pass the UPDATE_DONE action's parameters to the reducer
const updateDone = post => {
    return {
        type: UPDATE_DONE,
        payload: {
            post
        }
    };
};

//Method to pass the GET_POST action's parameters to the reducer
const getPostSuccess = post => {
    return {
        type: GET_POST,
        payload: {
            post
        }
    };
};


