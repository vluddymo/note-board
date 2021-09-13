import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@material-ui/core";
import {useContext, useEffect, useState} from "react";
import {addNote} from "../../context/notes/noteActions";
import {NoteDispatchContext, NoteStateContext} from "../../context/notes/noteContext";


export default function AddNoteDialogue(props){

    const [content, setContent] = useState("");
    const dispatch = useContext(NoteDispatchContext);
    const {addStatus} = useContext(NoteStateContext);

    useEffect(() => {
        if(addStatus === 'SUCCESS'){
            setContent("");
            props.handleClose();
        }
        // eslint-disable-next-line
    },[addStatus])


    function handleSubmit() {
        addNote(dispatch, content);
    }

    function handleChange(event){
        setContent(event.target.value);
    }

    return (
        <Dialog
            open={props.open}
            aria-labelledby="form-dialog-title"
            maxWidth={'sm'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title">What's your note ?</DialogTitle>
            <DialogContent>
                <form>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        value={content}
                        label="type away"
                        margin="normal"
                        spellCheck={false}
                        onChange={handleChange}
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