package de.vluddymo.note_board.controller;

import de.vluddymo.note_board.model.Note;
import de.vluddymo.note_board.model.dtos.NoteDto;
import de.vluddymo.note_board.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("{id}")
    public Note getNote (@PathVariable String id){
        return noteService.getNoteById(id);
    }

    @PutMapping
    public Note addNote(@RequestBody NoteDto noteDto){
        return noteService.addNote(noteDto);
    }

    @DeleteMapping("{id}")
    public void deleteNote(@PathVariable String id){
        noteService.deleteANote(id);
    }

    @PostMapping("{id}/updateNote")
    public Note editNote(@PathVariable String id, @RequestBody NoteDto noteDto){
        return noteService.editANote(id, noteDto.getContent());
    }
}
