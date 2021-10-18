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
    ADD_APPOINTMENT,
    ADD_APPOINTMENT_FAILED,
    ADD_APPOINTMENT_SUCCESS,
    ADD_IMAGE,
    ADD_IMAGE_FAILED,
    ADD_IMAGE_SUCCESS,
    ADD_LINK,
    ADD_LINK_FAILED,
    ADD_LINK_SUCCESS,
    FETCH_CONTENT,
    FETCH_CONTENT_FAILED,
    FETCH_CONTENT_SUCCESS,
    UPDATE_TODO_STATUS,
    UPDATE_TODO_STATUS_SUCCESS,
    UPDATE_TODO_STATUS_FAILED, FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILED,
}
    from "./contentActions";

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
        case ADD_APPOINTMENT:
            return { ...state, addAppointmentStatus: 'PENDING'};
        case ADD_APPOINTMENT_SUCCESS:
            return {
                ...state,
                addAppointmentStatus: 'SUCCESS',
                appointments: [ ...state.appointments, action.payload]
            }
        case ADD_APPOINTMENT_FAILED:
            return { ...state, addAppointmentStatus: 'FAILED'}
        case FETCH_TODOS:
            return { ...state, fetchTodoStatus: 'PENDING'};
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                fetchTodoStatus: 'SUCCESS',
                todos: action.payload
            }
        case FETCH_TODOS_FAILED:
            return { ...state, fetchTodoStatus: 'FAILED'}
        case UPDATE_TODO_STATUS:
            return { ...state, updateTodoStatus: 'PENDING'};
        case UPDATE_TODO_STATUS_SUCCESS:
            return {
                ...state,
                updateTodoStatus: 'SUCCESS',
                todos: [ state.todos.filter((todo) => {
                    return todo.todoId !== action.payload.todoId}), action.payload]
            }
        case UPDATE_TODO_STATUS_FAILED:
            return { ...state, updateTodoStatus: 'FAILED'}
        default:
            return state;
    }
}