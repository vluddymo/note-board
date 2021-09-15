import NoteCard from "../components/NoteCard/NoteCard";
import React, {useContext, useEffect} from "react";
import {NoteDispatchContext, NoteStateContext} from "../context/notes/noteContext";
import {fetchNotes} from "../context/notes/noteActions";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter/DashboardFooter";
import PageFrame from "../components/PageFrame/PageFrame";
import {Container, Grid} from "@material-ui/core";

export default function NotesDashboard() {

    const {notes, fetchStatus} = useContext(NoteStateContext);
    const dispatch = useContext(NoteDispatchContext);


    useEffect(() => {
        if (!fetchStatus) {
            fetchNotes(dispatch);
        }
    }, [fetchStatus, dispatch]);


    return (
        <Container >
            <DashboardHeader/>
            <PageFrame>
                <Grid container spacing={2}>
                {notes.map((note) =>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                    <NoteCard
                        key={note.id}
                        note={note}
                    />
                    </Grid>
                )}
                {fetchStatus === 'PENDING' && <div><p>loading...</p></div>}
                </Grid>
            </PageFrame>
            <DashboardFooter/>
        </Container>
    )
}
