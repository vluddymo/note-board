import NoteCard from "../components/NoteCard/NoteCard";
import {fetchAllNotes} from "../utils/notes-utils";
import {useContext, useEffect} from "react";
import {NoteDispatchContext, NoteStateContext} from "../context/notes/noteContext";

function NotesDashboard() {

    const {notes, fetchStatus} = useContext(NoteStateContext);
    const dispatch = useContext(NoteDispatchContext);

    useEffect(() => {
        if (!fetchStatus) {
            fetchAllNotes(dispatch).catch(Error)
        }
    }, [fetchStatus, dispatch]);


    return (
        <div>
            {notes.map((note) => <NoteCard key={note.id} note={note}/>)}
        </div>
    );
}

export default NotesDashboard;