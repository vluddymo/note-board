import {FETCH_NOTES, FETCH_NOTES_FAILED, FETCH_NOTES_SUCCESS} from "./noteActions";

export default function noteReducer(state, action) {
    switch (action.type) {
        case FETCH_NOTES:
            return { ...state, fetchStatus: 'PENDING' };
        case FETCH_NOTES_SUCCESS:
            return { ...state, fetchStatus: 'SUCCESS', notes: action.payload };
        case FETCH_NOTES_FAILED:
            return { ...state, fetchStatus: 'FAILED' };
        default:
            return state;
    }
}