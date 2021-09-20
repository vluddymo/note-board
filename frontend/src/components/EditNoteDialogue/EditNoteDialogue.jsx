import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";
import {NoteDispatchContext, NoteStateContext} from "../../context/notes/noteContext";
import {editNote} from "../../context/notes/noteActions";

export default function EditNoteDialog(props) {

    const history = useHistory()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [updatedContent, setUpdatedContent] = useState(props.content);

    const dispatch = useContext(NoteDispatchContext);
    const {editStatus} = useContext(NoteStateContext)

    useEffect(() => {
        if(editStatus === 'SUCCESS'){
            setUpdatedContent("");
            props.handleClose();
            history.push("/");

        }
        // eslint-disable-next-line
    },[editStatus, dispatch])



    function handleChange(event){
        setUpdatedContent(event.target.value)
    }

    function handleSubmit(){
            editNote(dispatch,props.note.id, updatedContent);
            props.handleClose();
    }


    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            fullWidth={true}
                            multiline={true}
                            margin="normal"
                            value={updatedContent}
                            spellCheck={false}
                            defaultValue={props.note.content}
                            onChange={handleChange}
                        >
                        </TextField>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}