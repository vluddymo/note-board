import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import DeleteButton from "./DeleteButton/DeleteButton";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    noteCard: {
        width: "90%",
        '@media (min-width: 426px)': {
            maxWidth: "md",
        },
        margin: "auto",
        marginBottom: "5px",
        marginTop: "5px",
        alignSelf: "center",
        justifyContent: "space-between",
        display: "flex",
        flexGrow: 1,
        flexDirection: "row",
    },
    textBox: {
        padding: "2px",
        display: "flex",
        alignContent: "center"
    },
    text: {
        alignSelf: "center",
    }
});

export default function NoteCard({note}) {

    const classes = useStyles();

    return (
            <Paper elevation={3} className={classes.noteCard}>
                    <div className={classes.textBox}><Typography className={classes.text}>{note.content}</Typography></div>
                    <DeleteButton noteId={note.id}/>
            </Paper>
    )
}