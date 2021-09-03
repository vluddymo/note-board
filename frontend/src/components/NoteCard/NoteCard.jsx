import React from "react";
import Paper from '@material-ui/core/Paper';


export default function NoteCard ({note}) {

    return (
        <div>
            <Paper elevation={3}>
                {note.content}
            </Paper>
        </div>
    )
}