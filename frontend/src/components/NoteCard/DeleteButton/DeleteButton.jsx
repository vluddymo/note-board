import {IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {NoteDispatchContext} from "../../../context/notes/noteContext";
import {deleteNote} from "../../../context/notes/noteActions";
import {useContext} from "react";

export default function DeleteButton({noteId}){

    const dispatch = useContext(NoteDispatchContext);


    function handleClick(event) {
        event.stopPropagation();
        deleteNote(dispatch, noteId);
    }

    return (
        <IconButton aria-label="delete">
            <DeleteIcon onClick={handleClick}/>
        </IconButton>
    )
}