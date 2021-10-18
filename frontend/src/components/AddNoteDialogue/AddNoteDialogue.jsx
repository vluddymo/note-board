import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@material-ui/core";
import {useContext, useEffect, useState} from "react";
import {addNote} from "../../context/notes/noteActions";
import {NoteDispatchContext, NoteStateContext} from "../../context/notes/noteContext";
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import {ButtonGroup} from "@mui/material";

export default function AddNoteDialogue(props){

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const dispatch = useContext(NoteDispatchContext);
    const {addStatus} = useContext(NoteStateContext);

    useEffect(() => {
        if(addStatus === 'SUCCESS'){
            setContent("");
            setTitle("");
            props.handleClose();
        }
        // eslint-disable-next-line
    },[addStatus, props])

    function buildDataPackage(){
        const noteData = {
            title: `${title}`,
            content: `${content}`
        };
        console.log(noteData.title.toString());
        console.log(noteData.content.toString());
        return noteData
    }

    function handleSubmit() {
        addNote(dispatch,buildDataPackage());
    }

    function handleTitleChange(event){
        setTitle(event.target.value);
    }

    function handleContentChange(event){
        setContent(event.target.value);
    }

    return (
        <Dialog
            open={props.open}
            aria-labelledby="form-dialog-title"
            maxWidth={'sm'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title">Deine neue Notiz</DialogTitle>
            <DialogContent>
                <ButtonGroup>
                    <Button size={"small"} variant={"contained"} startIcon={<WorkIcon fontSize={"small"}/>}/>
                    <Button size={"small"} variant={"contained"} startIcon={<BeachAccessIcon fontSize={"small"}/>}/>
                    <Button size={"small"} variant={"contained"} startIcon={<FaceRetouchingNaturalIcon fontSize={"small"}/>}/>
                </ButtonGroup>
                <form>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        value={title}
                        label="Titel"
                        margin="normal"
                        spellCheck={false}
                        onChange={handleTitleChange}
                    />
                </form>
                <form>
                    <TextField

                        fullWidth={true}
                        multiline={true}
                        value={content}
                        label="Beschreibung"
                        margin="normal"
                        spellCheck={false}
                        onChange={handleContentChange}
                    />
                </form>
                {addStatus === 'PENDING' && <Typography>loading...</Typography>}
                {addStatus === 'FAILED' && (
                    <Typography variant="body1" component="p">
                        That didn't seem to work
                    </Typography>)}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={content.length < 5}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>


    )
}