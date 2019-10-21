import {call, put} from 'redux-saga/effects';
import * as api from "../api";
import {loadPostsError, loadPostsSuccess} from "../actions/actions";

export function* loadPosts(action) {
    console.log("loadPosts", action);
    try {
        const result = yield call(api.loadPosts);
        yield put(loadPostsSuccess({
            posts: result.data
        }));
    } catch (e) {
        console.log("error", e);
        yield put(loadPostsError);
    }
}

