import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import DeleteButton from "./DeleteButton/DeleteButton";
import {makeStyles} from "@material-ui/core";
import EditButton from "./EditButton/EditButton";

const useStyles = makeStyles({
    noteCard: {
        padding: "10px",
        margin: "auto",
        width: "80%",
        height: "20vh",
        backgroundColor: "#edff21",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
    },
    textBox: {
        padding: "2px",
        display: "flex",
        alignContent: "center"
    },
    text: {
        alignSelf: "center",
    },
    buttonBox: {
        display: "flex",
        justifyContent: "space-between",
    }
});

export default function NoteCard({note}) {

    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.noteCard}>
            <div className={classes.textBox}><Typography className={classes.text}>{note.content}</Typography></div>
            <div className={classes.buttonBox}>
                <EditButton note={note}/>
                <DeleteButton id={note.id}/>
            </div>
        </Paper>
    )
}