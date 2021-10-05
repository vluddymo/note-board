import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {fetchNoteById} from "../utils/notes-utils";
import PageFrame from "../components/PageFrame/PageFrame";
import NoteDetailsCard from "../components/NoteDetailsCard/NoteDetailsCard";
import {fetchContents} from "../context/notes/contentActions";
import {NoteDispatchContext} from "../context/notes/noteContext";

export default function NoteDetails(){

    const {id} = useParams();
    const [note, setNote] = useState();
    const dispatch = useContext(NoteDispatchContext);

    useEffect(() => {
        fetchNoteById(id)
            .then((data) => setNote(data))
            .catch((e) => console.error(e));
        fetchContents(dispatch, id);

    }, [id, dispatch]);

    return (

        <PageFrame>
            {note && <NoteDetailsCard note={note}/>}
        </PageFrame>
    )
}