import NoteCard from "../components/NoteCard/NoteCard";
import React, {useContext, useEffect, useState} from "react";
import {NoteDispatchContext, NoteStateContext} from "../context/notes/noteContext";
import {fetchNotes} from "../context/notes/noteActions";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter/DashboardFooter";
import AddNoteDialogue from "../components/AddNoteDialogue/AddNoteDialogue";

export default function NotesDashboard() {

    const {notes, fetchStatus} = useContext(NoteStateContext);
    const dispatch = useContext(NoteDispatchContext);

    const [showAddDialog, setShowAddDialog] = useState(false);


    useEffect(() => {
        fetchNotes(dispatch)
    }, [dispatch]);


    return (
        <>
            <DashboardHeader/>
            <div>
                {notes.map((note) =>
                    <NoteCard
                        key={note.id}
                        note={note}
                    />
                )}
                {fetchStatus === 'PENDING' && <div><p>loading...</p></div>}
            </div>
            <DashboardFooter>
                <button onClick={() => setShowAddDialog(true)}>
                    Add a Note
                </button>
            </DashboardFooter>
            <AddNoteDialogue
                open={showAddDialog}
                handleClose={() => setShowAddDialog(false)}
            />
        </>
    )
}
