package de.vluddymo.note_board.service;

import de.vluddymo.note_board.database.NoteMongoDB;
import de.vluddymo.note_board.model.Note;
import de.vluddymo.note_board.model.dtos.NoteDto;
import de.vluddymo.note_board.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class NoteService {

    private final NoteMongoDB noteDb;
    private final IdUtils idUtils;

    @Autowired
    public NoteService(NoteMongoDB noteDb, IdUtils idUtils) {
        this.noteDb = noteDb;
        this.idUtils = idUtils;
    }

    public Iterable<Note> getAllNotes() {
        return noteDb.findAll();
    }


    public Note addNote(NoteDto noteDto) {
        Note noteToAdd = new Note();
        String noteId = idUtils.generateRandomId();
        noteToAdd.setId(noteId);
        noteToAdd.setContent(noteDto.getContent());
        noteDb.save(noteToAdd);
        return noteToAdd;
    }

    public void deleteANote(String id){
        Optional<Note> noteToDelete = noteDb.findById(id);
        if (noteToDelete.isPresent()) {
            noteDb.deleteById(id);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "I'm sorry, this note couldn't be deleted");
    }
}
