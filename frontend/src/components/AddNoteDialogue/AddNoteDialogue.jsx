import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@material-ui/core";


export default function AddNoteDialogue({open, handleClose}){

    return (
        <Dialog
            open={open}
            onClose={handleClose}
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
                        label="type away"
                        margin="normal"
                        spellCheck={false}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button>
                    Add
                </Button>
            </DialogActions>
        </Dialog>


    )
}