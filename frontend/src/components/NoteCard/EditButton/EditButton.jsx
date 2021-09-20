import EditIcon from '@material-ui/icons/Edit';
import {IconButton} from "@material-ui/core";
import EditNoteDialog from "../../EditNoteDialogue/EditNoteDialogue";
import React, {useState} from "react";

export default function EditButton({note}) {

    const [showEditDialogue, setShowEditDialogue] = useState(false);

    function handleClick(){
        setShowEditDialogue(true);
    }

    return (
        <>
            <IconButton aria-label="delete">
                <EditIcon color="primary" onClick={handleClick}/>
            </IconButton>
            <EditNoteDialog note={note}
                            open={showEditDialogue}
                            handleClose={() => {setShowEditDialogue(false)}}/>
        </>
    )
}