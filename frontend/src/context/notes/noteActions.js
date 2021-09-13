import {addANote, fetchAllNotes} from "../../utils/notes-utils";

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILED = 'FETCH_NOTES_FAILED';

export const ADD_NOTE = 'ADD_NOTE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILED = 'ADD_NOTE_FAILED';

export async function fetchNotes(dispatch) {
    dispatch({ type: FETCH_NOTES });
    try {
        const notes = await fetchAllNotes();
        dispatch({ type: FETCH_NOTES_SUCCESS, payload: notes });
        console.log("fetch success")
    } catch (error) {
        dispatch({ type: FETCH_NOTES_FAILED, payload: error });
    }
}

export async function addNote(dispatch,noteData) {
    dispatch({ type: ADD_NOTE });
    try {
        const note = await addANote(noteData);
        dispatch ({type: ADD_NOTE_SUCCESS, payload: note});
    } catch (error) {
        dispatch({type: ADD_NOTE_FAILED, payload: error})
    }

}




