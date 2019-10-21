import {combineReducers} from "redux";
import PostsReducer from './PostsReducer';
import NavReducer from "./NavReducer";

export default combineReducers({
    postsReducer: PostsReducer,
    navReducer: NavReducer
});

