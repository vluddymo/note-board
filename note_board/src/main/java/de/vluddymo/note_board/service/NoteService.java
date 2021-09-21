package de.vluddymo.note_board.service;

import de.vluddymo.note_board.database.NoteMongoDB;
import de.vluddymo.note_board.model.Note;
import de.vluddymo.note_board.model.dtos.NoteDto;
import de.vluddymo.note_board.utils.DateAndTimeUtils;
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
    private final DateAndTimeUtils dateAndTimeUtils;

    @Autowired
    public NoteService(NoteMongoDB noteDb, IdUtils idUtils, DateAndTimeUtils dateAndTimeUtils) {
        this.noteDb = noteDb;
        this.idUtils = idUtils;
        this.dateAndTimeUtils = dateAndTimeUtils;
    }

    public Iterable<Note> getAllNotes() {
        return noteDb.findAll();
    }

    public Note getNoteById(String id) {
        Optional<Note> optionalNote = noteDb.findById(id);
        if (optionalNote.isPresent()) {
            return optionalNote.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Note not found");
        }
    }


    public Note addNote(NoteDto noteDto) {
        Note noteToAdd = new Note();
        String noteId = idUtils.generateRandomId();
        noteToAdd.setId(noteId);
        noteToAdd.setTitle(noteDto.getTitle());
        noteToAdd.setContent(noteDto.getContent());
        noteToAdd.setDate(dateAndTimeUtils.generateDateStamp());
        noteDb.save(noteToAdd);
        return noteToAdd;
    }

    public void deleteANote(String id) {
        noteDb.deleteById(id);
    }

    public Note editANote(String id, String content) {
        Note note = getNoteById(id);
        note.setTitle(content);
        return noteDb.save(note);
    }
}
