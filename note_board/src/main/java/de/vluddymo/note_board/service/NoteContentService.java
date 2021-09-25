package de.vluddymo.note_board.service;

import de.vluddymo.note_board.database.noteContent.NoteAppointmentMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteGalleryItemMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteLinkMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteTodoMongoDB;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteAppointmentDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteGalleryItemDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteLinkDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteTodoDto;
import de.vluddymo.note_board.model.noteContent.NoteAppointment;
import de.vluddymo.note_board.model.noteContent.NoteGalleryItem;
import de.vluddymo.note_board.model.noteContent.NoteLink;
import de.vluddymo.note_board.model.noteContent.NoteToDo;
import de.vluddymo.note_board.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoteContentService {

    private final NoteAppointmentMongoDB noteAppointmentDb;
    private final NoteGalleryItemMongoDB noteGalleryItemDb;
    private final NoteLinkMongoDB noteLinkDb;
    private final NoteTodoMongoDB noteTodoDb;
    private final IdUtils idUtils;

    @Autowired
    public NoteContentService(NoteAppointmentMongoDB noteAppointmentDb,NoteGalleryItemMongoDB noteGalleryItemDb, NoteLinkMongoDB noteLinkDb,NoteTodoMongoDB noteTodoDb, IdUtils idUtils) {
        this.noteAppointmentDb = noteAppointmentDb;
        this.noteGalleryItemDb = noteGalleryItemDb;
        this.noteLinkDb = noteLinkDb;
        this.noteTodoDb = noteTodoDb;
        this.idUtils= idUtils;
    }

    public NoteAppointment insertAppointment(String id, NoteAppointmentDto appointmentDto) {
        NoteAppointment newAppointment = new NoteAppointment();
        newAppointment.setNoteId(id);
        newAppointment.setAppointmentId(idUtils.generateRandomId());
        newAppointment.setAppointmentDate(appointmentDto.getAppointmentDate());
        newAppointment.setAppointmentTime(appointmentDto.getAppointmentTime());
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

    public NoteToDo insertTodo(String id, NoteTodoDto todoDto) {
        NoteToDo newTodo = new NoteToDo();
        newTodo.setTodoId(idUtils.generateRandomId());
        newTodo.setNoteId(id);
        newTodo.setTask(todoDto.getTask());
        newTodo.setIsTaskDone(todoDto.getIsTaskDone());
        return noteTodoDb.save(newTodo);
    }

    public NoteGalleryItem insertGalleryItem(String id, NoteGalleryItemDto galleryItemDto) {
        NoteGalleryItem newGalleryItem = new NoteGalleryItem();
        newGalleryItem.setNoteId(id);
        newGalleryItem.setGalleryItemId(idUtils.generateRandomId());
        newGalleryItem.setImgUrl(galleryItemDto.getImgUrl());
        return noteGalleryItemDb.save(newGalleryItem);
    }
}
