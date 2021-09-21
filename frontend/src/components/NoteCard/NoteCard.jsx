import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import DeleteButton from "./DeleteButton/DeleteButton";
import {makeStyles} from "@material-ui/core";
import EditButton from "./EditButton/EditButton";
import DetailsButton from "./DetailsButton/DetailsButton";
import EditNoteDialog from "../EditNoteDialogue/EditNoteDialogue";

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
        alignContent: "center",
    },
    text: {
        alignSelf: "center",
    },
    buttonBox: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    }
});

export default function NoteCard({note}) {

    const history = useHistory();
    const [showEditDialogue, setShowEditDialogue] = useState(false);
    const classes = useStyles();

    return (
        <>
            <EditNoteDialog note={note}
                            open={showEditDialogue}
                            handleClose={() => {
                                setShowEditDialogue(false)
                            }}/>
            <Paper elevation={3} className={classes.noteCard} onClick={() => history.push(`/${note.id}`)}>
                <div className={classes.textBox}><Typography className={classes.text}>{note.title}</Typography></div>
                <div className={classes.buttonBox}>
                    <EditButton note={note} handleClick={() => setShowEditDialogue(true)}/>
                    <DetailsButton note={note}/>
                    <DeleteButton id={note.id}/>
                </div>
            </Paper>
        </>
    )
}