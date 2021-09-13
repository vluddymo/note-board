import React, {useState} from "react";
import "./DashboardFooter.css";
import AddNoteDialogue from "../AddNoteDialogue/AddNoteDialogue";


export default function DashboardFooter() {

    const [showAddDialog, setShowAddDialog] = useState(false);

    const handleClickOpen = () => {
        setShowAddDialog(true);
    }


    return (
        <footer className={"Footer"}>
            <button onClick={handleClickOpen}>
                Add a Note
            </button>
            <AddNoteDialogue
                open={showAddDialog}
                handleClose={() => setShowAddDialog(false)}
            />
        </footer>
    )

}