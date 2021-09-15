import {
    ADD_NOTE,
    ADD_NOTE_FAILED,
    ADD_NOTE_SUCCESS,
    DELETE_NOTE_SUCCESS,
    EDIT_NOTE,
    EDIT_NOTE_FAILED,
    EDIT_NOTE_SUCCESS,
    FETCH_NOTES,
    FETCH_NOTES_FAILED,
    FETCH_NOTES_SUCCESS
} from "./noteActions";

export default function noteReducer(state, action) {
    switch (action.type) {
        case FETCH_NOTES:
            return { ...state, fetchStatus: 'PENDING' };
        case FETCH_NOTES_SUCCESS:
            return { ...state, fetchStatus: 'SUCCESS', notes: action.payload };
        case FETCH_NOTES_FAILED:
            return { ...state, fetchStatus: 'FAILED' };
        case ADD_NOTE:
            return { ...state, addStatus: 'PENDING'};
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                addStatus: 'SUCCESS',
                notes: [ ...state.notes, action.payload]
            }
        case ADD_NOTE_FAILED:
            return { ...state, addStatus: 'FAILED'}
        case DELETE_NOTE_SUCCESS:
            return {
                ...state,
                notes: state.notes.filter((note) => {
                    return note.id !== action.payload;
                })
            }
        case EDIT_NOTE:
            return { ...state, editStatus: 'PENDING'};
        case EDIT_NOTE_SUCCESS:
            return {
                ...state,
                editStatus: 'SUCCESS',
                notes: [ ...state.notes]
            }
        case EDIT_NOTE_FAILED:
            return { ...state, editStatus: 'FAILED'}
        default:
            return state;
    }
}