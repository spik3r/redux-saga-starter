import {Types} from "./types";

export const loadPostsRequest = () => ({
    type: Types.LOAD_POSTS_REQUEST,
    payload: {
        isLoading: true,
        showError: false
    }
});

export const simulateError = () => ({
    type: Types.DO_ERROR_REQUEST,
    payload: {
        showError: true
    }
});

export const loadPostsSuccess = ({posts}) => ({
    type: Types.LOAD_POSTS_SUCCESS,
    payload: {
        isLoading: false,
        page: 1,
        posts
    }
});

export const loadPostsError = () => ({
    type: Types.LOAD_POSTS_ERROR,
    payload: {
        isLoading: false,
        showError: true
    }
});

export const changePageRequest = (pageNumber) => ({
    type: Types.CHANGE_PAGE,
    payload: {
        page: pageNumber,
    }
});

