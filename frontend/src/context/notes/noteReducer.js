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

import {
    ADD_IMAGE, ADD_IMAGE_FAILED, ADD_IMAGE_SUCCESS,
    ADD_LINK, ADD_LINK_FAILED,
    ADD_LINK_SUCCESS,
    FETCH_CONTENT,
    FETCH_CONTENT_FAILED,
    FETCH_CONTENT_SUCCESS
}
    from "./contentActions";

export default function noteReducer(state, action) {
    switch (action.type) {
        case FETCH_NOTES:
            return { ...state, fetchStatus: 'PENDING' };
        case FETCH_NOTES_SUCCESS:
            console.log("fetch reducer active on success")
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
                notes: [...state.notes.filter((note) => {
                return note.id !== action.payload.id}), action.payload]
            }
        case EDIT_NOTE_FAILED:
            return { ...state, editStatus: 'FAILED'}
        case FETCH_CONTENT:
            return { ...state, fetchContentStatus: 'PENDING' };
        case FETCH_CONTENT_SUCCESS:
            return { ...state, fetchContentStatus: 'SUCCESS',
                appointments: action.payload.appointments,
                gallery: action.payload.gallery,
                todos: action.payload.todos,
                links: action.payload.links
            };
        case FETCH_CONTENT_FAILED:
            return { ...state, fetchContentStatus: 'FAILED' };
        case ADD_LINK:
            return { ...state, addLinkStatus: 'PENDING'};
        case ADD_LINK_SUCCESS:
            return {
                ...state,
                addLinkStatus: 'SUCCESS',
                links: [ ...state.links, action.payload]
            }
        case ADD_LINK_FAILED:
            return { ...state, addLinkStatus: 'FAILED'}
        case ADD_IMAGE:
            return { ...state, addImgStatus: 'PENDING'};
        case ADD_IMAGE_SUCCESS:
            return {
                ...state,
                addImgStatus: 'SUCCESS',
                gallery: [ ...state.gallery, action.payload]
            }
        case ADD_IMAGE_FAILED:
            return { ...state, addImgStatus: 'FAILED'}
        default:
            return state;
    }
}