package de.vluddymo.note_board.controller;

import de.vluddymo.note_board.database.noteContent.NoteLinkMongoDB;
import de.vluddymo.note_board.model.dtos.NoteContentDto;
import de.vluddymo.note_board.model.noteContent.NoteAppointment;
import de.vluddymo.note_board.model.noteContent.NoteGalleryItem;
import de.vluddymo.note_board.model.noteContent.NoteLink;
import de.vluddymo.note_board.model.noteContent.NoteToDo;
import de.vluddymo.note_board.service.NoteContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/content")
public class NoteContentController {

    public final NoteContentService noteContentService;

    @Autowired
    public NoteContentController(NoteContentService noteContentService){
        this.noteContentService = noteContentService;
    }

    @PutMapping("{id}/appointment")
    public NoteAppointment AddAppointment(@PathVariable String id, NoteContentDto noteContentDto){
        return noteContentService.insertAppointment(noteContentDto);
    }

    @PutMapping("{id}/link")
    public NoteLink AddLink(@PathVariable String id, NoteContentDto noteContentDto){
        return noteContentService.insertLink(noteContentDto);
    }

    @PutMapping("{id}/todo")
    public NoteToDo AddTodo(@PathVariable String id, NoteContentDto noteContentDto){
        return noteContentService.insertTodo(noteContentDto);
    }

    @PutMapping("{id}/galleryItem")
    public NoteGalleryItem AddGalleryItem(@PathVariable String id, NoteContentDto noteContentDto){
        return noteContentService.insertGalleryItem(noteContentDto);
    }
}


