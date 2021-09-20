import {addANote, deleteANote, editANote, fetchAllNotes} from "../../utils/notes-utils";

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILED = 'FETCH_NOTES_FAILED';

export const ADD_NOTE = 'ADD_NOTE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILED = 'ADD_NOTE_FAILED';

export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILED = 'DELETE_NOTE_FAILED';

export const EDIT_NOTE = 'EDIT_NOTE';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const EDIT_NOTE_FAILED = 'EDIT_NOTE_FAILED';

export async function fetchNotes(dispatch) {
    dispatch({type: FETCH_NOTES});
    try {
        const notes = await fetchAllNotes();
        dispatch({type: FETCH_NOTES_SUCCESS, payload: notes});
        console.log("fetch success")
    } catch (error) {
        dispatch({type: FETCH_NOTES_FAILED, payload: error});
    }
}

export async function addNote(dispatch, noteData) {
    dispatch({type: ADD_NOTE});
    try {
        const note = await addANote(noteData);
        dispatch({type: ADD_NOTE_SUCCESS, payload: note});
        console.log("add success")
    } catch (error) {
        dispatch({type: ADD_NOTE_FAILED, payload: error})
    }

}

export async function deleteNote(dispatch, noteId) {
    dispatch({type: DELETE_NOTE});
    try {
        await deleteANote(noteId);
        dispatch({type: DELETE_NOTE_SUCCESS, payload: noteId});
        console.log("delete success")
    } catch (error) {
        dispatch({type: DELETE_NOTE_FAILED});
    }
}

export async function editNote(dispatch, noteId, updatedContent) {
    dispatch({type: EDIT_NOTE});
    try {
        const updatedNote = await editANote(noteId, updatedContent);
        dispatch({type: EDIT_NOTE_SUCCESS, payload: updatedNote});
        console.log("edit success");
        console.log(updatedNote.id.toString(), updatedNote.content.toString())
    } catch (error) {
        dispatch({type: EDIT_NOTE_FAILED, payload: error})
    }
}




