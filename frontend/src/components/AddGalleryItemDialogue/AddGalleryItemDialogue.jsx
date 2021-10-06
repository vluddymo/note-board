import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@material-ui/core";

import {useContext, useEffect, useState} from "react";
import {NoteDispatchContext, NoteStateContext} from "../../context/notes/noteContext";
import {addImage} from "../../context/notes/contentActions";


export default function AddGalleryItemDialogue(props) {

    const dispatch = useContext(NoteDispatchContext);
    const {addImgStatus} = useContext(NoteStateContext);
    const [imgUrl, setImgUrl] = useState("");
    const [imgDescription, setImgDescription] = useState("");

    useEffect(() => {
        if (addImgStatus === "SUCCESS"){
            setImgUrl("");
            setImgDescription("");
            props.handleClose();
        }
    }, [addImgStatus])

    function buildDataPackage(){
        const imgData = {
            imgUrl: `${imgUrl}`,
            imgDescription: `${imgDescription}`
        };
        console.log(imgData.imgDescription.toString());
        console.log(imgData.imgUrl.toString());
        return imgData
    }

    function handleDescriptionChange(event){
        setImgDescription(event.target.value)
    }
    function handleUrlChange(event){
        setImgUrl(event.target.value)
    }

    function handleSubmit(){
        addImage(dispatch, props.noteId, buildDataPackage())
    }

    return (
        <Dialog
            open={props.open}
            aria-labelledby="form-dialog-title"
            maxWidth={'sm'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title">"Neues Bild"</DialogTitle>
            <DialogContent>
                <form>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        value={imgDescription}
                        label="Bild Beschreibung"
                        margin="normal"
                        spellCheck={false}
                        onChange={handleDescriptionChange}
                    />
                </form>
                <form>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        value={imgUrl}
                        label="Bild Url"
                        margin="normal"
                        spellCheck={false}
                        onChange={handleUrlChange}
                    />
                </form>
                {addImgStatus === 'PENDING' && <Typography>loading...</Typography>}
                {addImgStatus === 'FAILED' && (
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