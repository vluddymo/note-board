package de.vluddymo.note_board.service;

import de.vluddymo.note_board.database.noteContent.NoteAppointmentMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteGalleryItemMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteLinkMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteTodoMongoDB;
import de.vluddymo.note_board.model.Note;
import de.vluddymo.note_board.model.NotesContent;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteAppointmentDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteGalleryItemDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteLinkDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteTodoDto;
import de.vluddymo.note_board.model.noteContent.NoteAppointment;
import de.vluddymo.note_board.model.noteContent.NoteGalleryItem;
import de.vluddymo.note_board.model.noteContent.NoteLink;
import de.vluddymo.note_board.model.noteContent.NoteToDo;
import de.vluddymo.note_board.utils.DateAndTimeUtils;
import de.vluddymo.note_board.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.BooleanOperators;
import org.springframework.stereotype.Service;

import java.util.*;

import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.startsWith;

@Service
public class NoteContentService {

    private final NoteAppointmentMongoDB noteAppointmentDb;
    private final NoteGalleryItemMongoDB noteGalleryItemDb;
    private final NoteLinkMongoDB noteLinkDb;
    private final NoteTodoMongoDB noteTodoDb;
    private final IdUtils idUtils;
    private final DateAndTimeUtils dateAndTimeUtils;

    @Autowired
    public NoteContentService(NoteAppointmentMongoDB noteAppointmentDb, NoteGalleryItemMongoDB noteGalleryItemDb, NoteLinkMongoDB noteLinkDb, NoteTodoMongoDB noteTodoDb, IdUtils idUtils, DateAndTimeUtils dateAndTimeUtils) {
        this.noteAppointmentDb = noteAppointmentDb;
        this.noteGalleryItemDb = noteGalleryItemDb;
        this.noteLinkDb = noteLinkDb;
        this.noteTodoDb = noteTodoDb;
        this.idUtils = idUtils;
        this.dateAndTimeUtils = dateAndTimeUtils;
    }

    public NotesContent getAllNoteContents() {
        NotesContent content = new NotesContent();
        content.setAppointments(noteAppointmentDb.findAll());
        content.setGallery(noteGalleryItemDb.findAll());
        content.setLinks(noteLinkDb.findAll());
        content.setTodos(noteTodoDb.findAll());
        return content;
    }

    public Iterable<NoteLink> findLinksByNoteId(String noteId) {
        Iterable<NoteLink> allLinks = noteLinkDb.findAll();
        List<NoteLink> filteredList = new ArrayList<>();
        for (NoteLink link : allLinks) {
            if (link.getNoteId().equals(noteId)) {
                filteredList.add(link);
            }
        }
        return filteredList;
    }

    public Iterable<NoteAppointment> findAppointmentsByNoteId(String noteId) {
        Iterable<NoteAppointment> allAppointments = noteAppointmentDb.findAll();
        List<NoteAppointment> filteredList = new ArrayList<>();
        for (NoteAppointment appointment : allAppointments) {
            if (appointment.getNoteId().equals(noteId)) {
                filteredList.add(appointment);
            }
        }
        return filteredList;
    }

    public Iterable<NoteToDo> findTodosByNoteId(String noteId) {
        Iterable<NoteToDo> allTodos = noteTodoDb.findAll();
        List<NoteToDo> filteredList = new ArrayList<>();
        for (NoteToDo todo : allTodos) {
            if (todo.getNoteId().equals(noteId)) {
                filteredList.add(todo);
            }
        }
        return filteredList;
    }

    public Iterable<NoteGalleryItem> findGalleryItemsByNoteId(String noteId) {
        Iterable<NoteGalleryItem> allItems = noteGalleryItemDb.findAll();
        List<NoteGalleryItem> filteredList = new ArrayList<>();
        for (NoteGalleryItem item : allItems) {
            if (item.getNoteId().equals(noteId)) {
                filteredList.add(item);
            }
        }
        return filteredList;
    }


    public NotesContent getNoteContentById(String noteId) {
        NotesContent content = new NotesContent();
        content.setAppointments(findAppointmentsByNoteId(noteId));
        content.setTodos(findTodosByNoteId(noteId));
        content.setGallery(findGalleryItemsByNoteId(noteId));
        content.setLinks(findLinksByNoteId(noteId));
        return content;
    }

    public Iterable<NoteToDo> getNoteTodosById(String noteId) {
        return findTodosByNoteId(noteId);
    }

    public NoteAppointment insertAppointment(String id, NoteAppointmentDto appointmentDto) {
        NoteAppointment newAppointment = new NoteAppointment();
        newAppointment.setNoteId(id);
        newAppointment.setAppointmentId(idUtils.generateRandomId());
        newAppointment.setAppointmentDate(dateAndTimeUtils.formatAppointmentDate(appointmentDto.getAppointmentDate()));
        newAppointment.setAppointmentTime(appointmentDto.getAppointmentTime()+" Uhr");
        newAppointment.setAppointmentDescription(appointmentDto.getAppointmentDescription());
        newAppointment.setOnAlert(appointmentDto.getOnAlert());
        return noteAppointmentDb.save(newAppointment);
    }

    public NoteLink insertLink(String id, NoteLinkDto linkDto) {
        NoteLink newLink = new NoteLink();
        newLink.setNoteId(id);
        newLink.setLinkId(idUtils.generateRandomId());
        newLink.setLinkDescription(linkDto.getLinkDescription());
        newLink.setLinkUrl(linkDto.getLinkUrl());
        return noteLinkDb.save(newLink);
    }

    public NoteToDo insertTodo(String noteId, NoteTodoDto todoDto) {
        NoteToDo newTodo = new NoteToDo();
        newTodo.setNoteId(noteId);
        newTodo.setId(idUtils.generateRandomId());
        newTodo.setTask(todoDto.getTask());
        newTodo.setIsTaskDone(todoDto.getIsTaskDone());
        return noteTodoDb.save(newTodo);
    }

    public NoteGalleryItem insertGalleryItem(String id, NoteGalleryItemDto galleryItemDto) {
        NoteGalleryItem newGalleryItem = new NoteGalleryItem();
        newGalleryItem.setNoteId(id);
        newGalleryItem.setGalleryItemId(idUtils.generateRandomId());
        newGalleryItem.setImgUrl(galleryItemDto.getImgUrl());
        newGalleryItem.setImgDescription(galleryItemDto.getImgDescription());
        return noteGalleryItemDb.save(newGalleryItem);
    }
}
