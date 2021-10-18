import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@material-ui/core";
import {useContext, useEffect, useState} from "react";
import {NoteDispatchContext, NoteStateContext} from "../../context/notes/noteContext";
import {addLink} from "../../context/notes/contentActions";


export default function AddLinkDialogue(props) {

    const dispatch = useContext(NoteDispatchContext);
    const {addLinkStatus} = useContext(NoteStateContext);
    const [linkUrl, setLinkUrl] = useState("");
    const [linkDescription, setLinkDescription] = useState("");

    useEffect(() => {
        if (addLinkStatus === "SUCCESS"){
            setLinkUrl("");
            setLinkDescription("");
            props.handleClose();
        }
    }, [addLinkStatus, props])

    function buildDataPackage(){
        const linkData = {
            linkDescription: `${linkDescription}`,
            linkUrl: `${linkUrl}`
        };
        console.log(linkData.linkDescription.toString());
        console.log(linkData.linkUrl.toString());
        return linkData
    }

    function handleDescriptionChange(event){
        setLinkDescription(event.target.value)
    }
    function handleUrlChange(event){
        setLinkUrl(event.target.value)
    }

    function handleSubmit(){
        addLink(dispatch, props.noteId, buildDataPackage())
    }

    return (
        <Dialog
            open={props.open}
            aria-labelledby="form-dialog-title"
            maxWidth={'sm'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title">"Neuer Link"</DialogTitle>
            <DialogContent>
                <form>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        value={linkDescription}
                        label="Link Beschreibung"
                        margin="normal"
                        spellCheck={false}
                        onChange={handleDescriptionChange}
                    />
                </form>
                <form>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        value={linkUrl}
                        label="Link Url"
                        margin="normal"
                        spellCheck={false}
                        onChange={handleUrlChange}
                    />
                </form>
                {addLinkStatus === 'PENDING' && <Typography>loading...</Typography>}
                {addLinkStatus === 'FAILED' && (
                    <Typography variant="body1" component="p">
                        That didn't seem to work
                    </Typography>)}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}