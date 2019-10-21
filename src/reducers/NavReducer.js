import {Types} from "../actions/types";

const INITIAL_STATE = {};

export default function navReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.CHANGE_PAGE: {
            console.log('CHANGE_PAGE', action.payload);
            return {
                ...state,
                page: action.payload.page
            }
        }
        default: {
            return state;
        }
    }
}