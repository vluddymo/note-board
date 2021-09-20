import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {fetchNoteById} from "../utils/notes-utils";
import PageFrame from "../components/PageFrame/PageFrame";
import NoteDetailsCard from "../components/NoteDetailsCard/NoteDetailsCard";


export default function NoteDetails(){

    const {id} = useParams();
    const [note, setNote] = useState();

    useEffect(() => {
        fetchNoteById(id)
            .then((data) => setNote(data))
            .catch((e) => console.error(e));
    }, [id]);

    return (

        <PageFrame>
            {note && <NoteDetailsCard note={note}/>}
        </PageFrame>
    )
}