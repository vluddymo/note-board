import './App.css';
import {useEffect, useState} from "react";
import {fetchAllNotes} from "./utils/notes-utils";
import {NoteCard} from "./components/NoteCard/NoteCard";

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
  fetchAllNotes().then(data => setNotes(data))
  }, [] );

  return (
    <div>
      {notes.map((note) => <NoteCard key={note.id} note={note}/>)}
    </div>
  );
}

export default App;
