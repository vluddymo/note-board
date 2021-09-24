import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import DeleteButton from "./DeleteButton/DeleteButton";
import {makeStyles} from "@material-ui/core";
import EditNoteDialog from "../EditNoteDialogue/EditNoteDialogue";

const useStyles = makeStyles((theme)=>({
    noteCard: {
        padding: "10px",
        margin: "auto",
        width: "80%",
        height: "20vh",
        backgroundColor: "#edff21",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center"
    },
    textBox: {
        padding: "2px",
        display: "flex",
        alignContent: "center",
    },
    text: {
        marginBottom: theme.spacing(1),
        flexGrow: 2,
    },
    buttonBox: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
        justifySelf: "stretch",
    },
    date: {
        color: "grey",
        fontSize: "small",
        marginBottom: theme.spacing(1)
    }
}));

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
            <Paper sx={{
                backgroundColor: 'black',
            }} elevation={3} className={classes.noteCard} onClick={() => history.push(`/${note.id}`)}>
                <div className={classes.date}>{note.date}</div>
                <div className={classes.text}>{note.title}</div>
                <div className={classes.buttonBox}>
                    <DeleteButton id={note.id}/>
                </div>
            </Paper>
        </>
    )
}