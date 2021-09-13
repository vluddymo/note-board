import NoteCard from "../components/NoteCard/NoteCard";
import React, {useContext, useEffect} from "react";
import {NoteDispatchContext, NoteStateContext} from "../context/notes/noteContext";
import {fetchNotes} from "../context/notes/noteActions";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter/DashboardFooter";

export default function NotesDashboard() {

    const {notes, fetchStatus} = useContext(NoteStateContext);
    const dispatch = useContext(NoteDispatchContext);


    useEffect(() => {
        if (!fetchStatus) {
            fetchNotes(dispatch);
        }
    }, [fetchStatus, dispatch]);


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
            <DashboardFooter/>
        </>
    )
}
