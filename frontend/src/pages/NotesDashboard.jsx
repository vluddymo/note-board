import NoteCard from "../components/NoteCard/NoteCard";
import {useContext, useEffect} from "react";
import {NoteDispatchContext, NoteStateContext} from "../context/notes/noteContext";
import {fetchNotes} from "../context/notes/noteActions";

export default function NotesDashboard() {

    const {notes, fetchStatus} = useContext(NoteStateContext);
    const dispatch = useContext(NoteDispatchContext);

    useEffect(() => {
        fetchNotes(dispatch)
    }, [dispatch]);


    return (
        <div>
            {notes.map((note) =>
                <NoteCard
                    key={note.id}
                    note={note}
                />
            )}
            {fetchStatus === 'PENDING' && <div><p>loading...</p></div>}
        </div>
    );
}