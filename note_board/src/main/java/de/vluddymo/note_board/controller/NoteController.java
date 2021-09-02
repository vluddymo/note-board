package de.vluddymo.note_board.controller;

import de.vluddymo.note_board.model.Note;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/notes")
public class NoteController {

    @GetMapping
    public List<Note> getNotes (){
        return List.of(
                new Note("1", "first Note"),
                new Note("2", "second Note")
        );
    }
}
