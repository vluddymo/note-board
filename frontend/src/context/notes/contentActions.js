import {addALink, addAnAppointment, addAnImage, fetchContentById} from "../../utils/noteContent-utils";

export const FETCH_CONTENT = 'FETCH_CONTENT';
export const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
export const FETCH_CONTENT_FAILED = 'FETCH_CONTENT_FAILED';

export const ADD_LINK = 'ADD_LINK';
export const ADD_LINK_SUCCESS = 'ADD_LINK_SUCCESS';
export const ADD_LINK_FAILED = 'ADD_LINK_FAILED';

export const ADD_IMAGE = 'ADD_IMAGE';
export const ADD_IMAGE_SUCCESS = 'ADD_IMAGE_SUCCESS';
export const ADD_IMAGE_FAILED = 'ADD_IMAGE_FAILED';

export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
export const ADD_APPOINTMENT_SUCCESS = 'ADD_APPOINTMENT_SUCCESS';
export const ADD_APPOINTMENT_FAILED = 'ADD_APPOINTMENT_FAILED';

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

export async function addImage(dispatch, noteId, imgData) {
    dispatch({type: ADD_IMAGE});
    try {
        const image = await addAnImage(noteId, imgData);
        dispatch({type: ADD_IMAGE_SUCCESS, payload: image});
        console.log("add image success")
    } catch (error) {
        dispatch({type: ADD_IMAGE_FAILED, payload: error})
    }

}

export async function addAppointment(dispatch, noteId, appointmentData) {
    dispatch({type: ADD_APPOINTMENT});
    try {
        const appointment = await addAnAppointment(noteId, appointmentData);
        dispatch({type: ADD_APPOINTMENT_SUCCESS, payload: appointment});
        console.log("add appointment success")
    } catch (error) {
        dispatch({type: ADD_APPOINTMENT_FAILED, payload: error})
    }

}