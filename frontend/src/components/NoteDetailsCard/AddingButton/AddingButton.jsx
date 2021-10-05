import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import React, {useState} from "react";
import AddAppointmentDialogue from "../../AddAppointmentDialogue/AddAppointmentDialogue";
import AddGalleryItemDialogue from "../../AddGalleryItemDialogue/AddGalleryItemDialogue";
import AddLinkDialogue from "../../AddLinkDialogue/AddLinkDialogue";

export default function AddingButton({noteId, type}) {

    const [appointmentDialogue, setAppointmentDialogue] = useState(false)
    const [galleryDialogue, setGalleryDialogue] = useState(false)
    const [linkDialogue, setLinkDialogue] = useState(false)


    function handleClick() {
        switch (type) {
            case "Termine":
                return setAppointmentDialogue(true);
            case "Gallerie":
                return setGalleryDialogue(true);
            case "Links":
                return setLinkDialogue(true);
            default:
                return null
        }
    }

    return (

        <>
            <Fab color="primary"
                 aria-label="add"
                 onClick={handleClick}
            >
                <AddIcon/>
            </Fab>
            <AddAppointmentDialogue open={appointmentDialogue} handleClose={() => setAppointmentDialogue(false)} noteId={noteId}/>
            <AddGalleryItemDialogue open={galleryDialogue} handleClose={() => setGalleryDialogue(false)} noteId={noteId}/>
            <AddLinkDialogue open={linkDialogue} handleClose={() => setLinkDialogue(false)} noteId={noteId}/>
        </>

    )

}