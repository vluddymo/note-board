package de.vluddymo.note_board.controller;

import de.vluddymo.note_board.model.Note;
import de.vluddymo.note_board.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/notes")
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService){
        this.noteService = noteService;
    }

    @GetMapping
    public Iterable<Note> getNotes (){
       return noteService.getAllNotes();
    }
}
