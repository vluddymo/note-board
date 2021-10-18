import NoteCard from "../components/NoteCard/NoteCard";
import React, {useContext, useEffect} from "react";
import {NoteDispatchContext, NoteStateContext} from "../context/notes/noteContext";
import {fetchNotes} from "../context/notes/noteActions";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter/DashboardFooter";
import PageFrame from "../components/PageFrame/PageFrame";
import {Container, Grid} from "@material-ui/core";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme)=>({
    noteContainer: {
        flexGrow: 2,
        width: "100%",
        display: "flex",
        overflow: "scroll",
    },
}));

export default function NotesDashboard() {

    const classes = useStyles();

    const {notes, fetchStatus} = useContext(NoteStateContext);
    const dispatch = useContext(NoteDispatchContext);


    useEffect(() => {
        if (!fetchStatus) {
            fetchNotes(dispatch);
        }
    }, [fetchStatus, dispatch]);


    return (
        <PageFrame>
            <DashboardHeader/>
            <Container className={classes.noteContainer}>
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
            </Container>
            <DashboardFooter/>
        </PageFrame>


    )
}
