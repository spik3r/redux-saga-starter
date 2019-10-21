import {takeEvery} from 'redux-saga/effects';
import {Types} from "../actions/types";
import * as worker from "./worker";
import {fork} from "@redux-saga/core/effects";

function* watchLoadPostsRequest(){
    yield takeEvery(Types.LOAD_POSTS_REQUEST, worker.loadPosts);
}

const postsSagas = [
    fork(watchLoadPostsRequest),
];


export default postsSagas;