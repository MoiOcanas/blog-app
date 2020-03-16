import postsReducer from './postsReducer';
import { combineReducers } from 'redux';

/* Main reducer, we can define a new one a put it here */
const rootReducer = combineReducers({
    posts: postsReducer
});

export default rootReducer;