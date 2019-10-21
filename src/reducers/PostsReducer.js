import {Types} from "../actions/types";

const INITIAL_STATE = {};

export default function postsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.LOAD_POSTS_REQUEST: {
            console.log('LOAD_POSTS_REQUEST', action.payload);
            return {...state,
                    ...action.payload
                }
            }
        case Types.DO_ERROR_REQUEST: {
            console.log('DO_ERROR_REQUEST', action.payload);
            return {...state,
                    ...action.payload
                }
            }

        case Types.LOAD_POSTS_SUCCESS: {
            console.log('LOAD_POSTS_SUCCESS', action.payload);
            return {
                ...state,
                ...action.payload
            }
        }
        case Types.LOAD_POSTS_ERROR: {
            console.log('LOAD_POSTS_ERROR', action.payload);
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}