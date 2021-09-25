package de.vluddymo.note_board.service;

import de.vluddymo.note_board.database.NoteMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteAppointmentMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteGalleryItemMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteLinkMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteTodoMongoDB;
import de.vluddymo.note_board.model.dtos.NoteContentDto;
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

    public NoteAppointment insertAppointment(NoteContentDto noteContentDto) {
        NoteAppointment newAppointment = new NoteAppointment();
        newAppointment.setId(noteContentDto.getId());
        newAppointment.setAppointmentId(idUtils.generateRandomId());
        newAppointment.setAppointmentDate(noteContentDto.getAppointmentDate());
        newAppointment.setAppointmentTime(noteContentDto.getAppointmentTime());
        newAppointment.setAppointmentDescription(noteContentDto.getAppointmentDescription());
        newAppointment.setOnAlert(noteContentDto.getOnAlert());
        return noteAppointmentDb.save(newAppointment);
    }

    public NoteLink insertLink(NoteContentDto noteContentDto) {
        NoteLink newLink = new NoteLink();
        newLink.setId(noteContentDto.getId());
        newLink.setLinkId(idUtils.generateRandomId());
        newLink.setLinkDescription(noteContentDto.getLinkDescription());
        newLink.setLinkUrl(noteContentDto.getLinkUrl());
        return noteLinkDb.save(newLink);
    }

    public NoteToDo insertTodo(NoteContentDto noteContentDto) {
        NoteToDo newTodo = new NoteToDo();
        newTodo.setId(noteContentDto.getId());
        newTodo.setTodoId(idUtils.generateRandomId());
        newTodo.setTask(noteContentDto.getTask());
        newTodo.setIsTaskDone(noteContentDto.getIsTaskDone());
        return noteTodoDb.save(newTodo);
    }

    public NoteGalleryItem insertGalleryItem(NoteContentDto noteContentDto) {
        NoteGalleryItem newGalleryItem = new NoteGalleryItem();
        newGalleryItem.setId(noteContentDto.getId());
        newGalleryItem.setGalleryItemId(idUtils.generateRandomId());
        newGalleryItem.setImgUrl(noteContentDto.getImgUrl());
        return noteGalleryItemDb.save(newGalleryItem);
    }
}
