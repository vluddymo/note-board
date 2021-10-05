import {addALink, fetchContentById} from "../../utils/noteContent-utils";

export const FETCH_CONTENT = 'FETCH_CONTENT';
export const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
export const FETCH_CONTENT_FAILED = 'FETCH_CONTENT_FAILED';

export const ADD_LINK = 'ADD_LINK';
export const ADD_LINK_SUCCESS = 'ADD_LINK_SUCCESS';
export const ADD_LINK_FAILED = 'ADD_LINK_FAILED';

export async function fetchContents(dispatch, id) {
    dispatch({type: FETCH_CONTENT});
    try {
        const content = await fetchContentById(id);
        dispatch({type: FETCH_CONTENT_SUCCESS, payload: content});
        console.log("fetch content success")
    } catch (error) {
        dispatch({type: FETCH_CONTENT_FAILED, payload: error});
    }
}

export async function addLink(dispatch, noteId, linkData) {
    dispatch({type: ADD_LINK});
    try {
        const link = await addALink(noteId, linkData);
        dispatch({type: ADD_LINK_SUCCESS, payload: link});
        console.log("add link success")
    } catch (error) {
        dispatch({type: ADD_LINK_FAILED, payload: error})
    }

}