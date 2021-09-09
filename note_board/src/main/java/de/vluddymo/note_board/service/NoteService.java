package de.vluddymo.note_board.service;

import de.vluddymo.note_board.database.NoteMongoDB;
import de.vluddymo.note_board.model.Note;
import de.vluddymo.note_board.model.dtos.NoteDto;
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


    public Note addNote(NoteDto noteDto) {
        Note noteToAdd = new Note();
        noteToAdd.setId(noteDto.getId());
        noteToAdd.setContent(noteDto.getContent());
        noteDb.save(noteToAdd);
        return noteToAdd;
    }
}
