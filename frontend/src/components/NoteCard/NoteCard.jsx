import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";



export default function NoteCard ({note}) {

    return (
        <div>
            <Paper elevation={3}>
                <Typography>{note.content}</Typography>
            </Paper>
        </div>
    )
}