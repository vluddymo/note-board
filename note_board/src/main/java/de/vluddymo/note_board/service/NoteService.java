package de.vluddymo.note_board.service;

import de.vluddymo.note_board.database.NoteMongoDB;
import de.vluddymo.note_board.model.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoteService {

    private final NoteMongoDB noteDb;

    @Autowired
    public NoteService(NoteMongoDB noteDb) {
        this.noteDb = noteDb;
    }

    public Iterable<Note> getAllNotes() {
        return noteDb.findAll();
    }


}
