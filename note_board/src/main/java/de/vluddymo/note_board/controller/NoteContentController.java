package de.vluddymo.note_board.controller;

import de.vluddymo.note_board.model.NotesContent;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteAppointmentDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteGalleryItemDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteLinkDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteTodoDto;
import de.vluddymo.note_board.model.noteContent.NoteAppointment;
import de.vluddymo.note_board.model.noteContent.NoteGalleryItem;
import de.vluddymo.note_board.model.noteContent.NoteLink;
import de.vluddymo.note_board.model.noteContent.NoteToDo;
import de.vluddymo.note_board.service.NoteContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/content")
public class NoteContentController {

    public final NoteContentService noteContentService;

    @Autowired
    public NoteContentController(NoteContentService noteContentService){
        this.noteContentService = noteContentService;
    }

    @GetMapping
    public NotesContent getAllContents(){
        return noteContentService.getAllNoteContents();
    }

    @GetMapping("{noteId}")
    public NotesContent getContentById(@PathVariable String noteId){
        return noteContentService.getNoteContentById(noteId);
    }
    @GetMapping("{noteId}/todos")
    public Iterable<NoteToDo> getTodosById(@PathVariable String noteId){
        return noteContentService.getNoteTodosById(noteId);
    }

    @PutMapping("{id}/appointment")
    public NoteAppointment AddAppointment(@PathVariable String id, @RequestBody NoteAppointmentDto noteAppointmentDto){
        return noteContentService.insertAppointment(id, noteAppointmentDto);
    }

    @PutMapping("{id}/link")
    public NoteLink AddLink(@PathVariable String id, @RequestBody NoteLinkDto noteLinkDto){
        return noteContentService.insertLink(id, noteLinkDto);
    }

    @PutMapping("{id}/todo")
    public NoteToDo AddTodo(@PathVariable String id, @RequestBody NoteTodoDto noteTodoDto){
        return noteContentService.insertTodo(id, noteTodoDto);
    }

    @PutMapping("{id}/galleryItem")
    public NoteGalleryItem AddGalleryItem(@PathVariable String id, @RequestBody NoteGalleryItemDto noteGalleryItemDto){
        return noteContentService.insertGalleryItem(id, noteGalleryItemDto);
    }
}


