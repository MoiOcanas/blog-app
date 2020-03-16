import {
    GET_POSTS,
    GET_POST,
    POST_DONE,
    DELETE_DONE,
    UPDATE_DONE,
    POST_VISITED
} from '../actions/actionTypes';

/* Initial state from store */
const initState = {
    posts: []
}

export default function (state = initState, action) {
    switch (action.type) {

        /* It returns all the posts from API */
        case GET_POSTS:
            return { ...state, posts: action.payload.posts }

        /* It returns an individual post from API */    
        case GET_POST:
            return { ...state, post: action.payload.post }

        /* It returns the post you have already created */       
        case POST_DONE:
            return { ...state, posts: [ action.payload.post, ...state.posts] }

        /* It returns the new post after update it */ 
        case UPDATE_DONE:
            return { ...state, posts: [ action.payload.post, ...state.posts] }

        /* It returns all the posts after define the visited post new postion  */     
        case POST_VISITED:
             return { ...state, posts: action.payload.posts }
        
        /* It returns all the posts after delete a post  */   
        case DELETE_DONE:
            return { ...state, posts: state.posts.filter(post => post.id !== action.payload.postId) }
        
        /* Default return  */     
        default:
            return state;
    }
}
