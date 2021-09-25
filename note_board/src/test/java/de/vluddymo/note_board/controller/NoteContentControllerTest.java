package de.vluddymo.note_board.controller;

import de.vluddymo.note_board.database.noteContent.NoteAppointmentMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteGalleryItemMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteLinkMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteTodoMongoDB;
import de.vluddymo.note_board.model.Note;
import de.vluddymo.note_board.model.dtos.NoteDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteAppointmentDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteGalleryItemDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteLinkDto;
import de.vluddymo.note_board.model.noteContent.NoteAppointment;
import de.vluddymo.note_board.model.noteContent.NoteGalleryItem;
import de.vluddymo.note_board.model.noteContent.NoteLink;
import de.vluddymo.note_board.model.noteType.NoteType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class NoteContentControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    public NoteAppointmentMongoDB noteAppointmentDb;

    @Autowired
    public NoteLinkMongoDB noteLinkDb;

    @Autowired
    public NoteGalleryItemMongoDB noteGalleryItemDb;

    @Autowired
    public NoteTodoMongoDB noteTodoDb;

    @BeforeEach
    public void resetDatabase() {

        noteAppointmentDb.deleteAll();
        noteGalleryItemDb.deleteAll();
        noteLinkDb.deleteAll();
        noteTodoDb.deleteAll();
    }

    @Test
    public void AddAppointmentShouldAddNewAppointmentToDatabase() {

        //GIVEN
        NoteAppointment firstAppointment = new NoteAppointment("23", "345", "Bachelorarbeit", "21. Septmeber 2021", "13:30 Uhr", true);
        NoteAppointment secondAppointment = new NoteAppointment("123", "567", "Masterarbeit", "25. September 2021", "15:00 Uhr", true);
        noteAppointmentDb.save(firstAppointment);
        noteAppointmentDb.save(secondAppointment);

        String noteId = "7890";

        String url = "http://localhost:" + port + "/api/content/" + noteId + "/appointment";
        HttpHeaders headers = new HttpHeaders();
        NoteAppointmentDto noteAppointmentDto = new NoteAppointmentDto("neuer termin", "30. September 2021", "16:00 Uhr", true);
        HttpEntity<NoteAppointmentDto> requestEntity = new HttpEntity<>(noteAppointmentDto, headers);

        //WHEN
        ResponseEntity<NoteAppointment> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, NoteAppointment.class);

        //THEN
        long amountOfAppointments = noteAppointmentDb.count();

        assertEquals(amountOfAppointments, 3);
        assertEquals(putResponse.getStatusCode(), HttpStatus.OK);
        assertEquals(putResponse.getBody().getAppointmentDescription(), "neuer termin");

        Optional<NoteAppointment> byId = noteAppointmentDb.findById(putResponse.getBody().getAppointmentId());
        assertTrue(byId.isPresent());
        assertEquals("30. September 2021", byId.get().getAppointmentDate());

    }

    @Test
    public void AddLinkShouldAddNewLinkToDatabase() {

        //GIVEN
        NoteLink firstLink = new NoteLink("23", "345", "Bachelorarbeit", "https://github.com/vluddymo");
        NoteLink secondLink = new NoteLink("123", "567", "Masterarbeit", "https://github.com/vluddymo");
        noteLinkDb.save(firstLink);
        noteLinkDb.save(secondLink);

        String noteId = "7890";

        String url = "http://localhost:" + port + "/api/content/" + noteId + "/link";
        HttpHeaders headers = new HttpHeaders();
        NoteLinkDto noteLinkDto = new NoteLinkDto("Diplomarbeit", "https://github.com/vluddymo?tab=repositories");
        HttpEntity<NoteLinkDto> requestEntity = new HttpEntity<>(noteLinkDto, headers);

        //WHEN
        ResponseEntity<NoteLink> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, NoteLink.class);

        //THEN
        long amountOfLinks = noteLinkDb.count();

        assertNotNull(putResponse.getBody());
        assertEquals(amountOfLinks, 3);
        assertEquals(putResponse.getStatusCode(), HttpStatus.OK);
        assertEquals(putResponse.getBody().getLinkDescription(), "Diplomarbeit");

        Optional<NoteLink> byId = noteLinkDb.findById(putResponse.getBody().getLinkId());
        assertTrue(byId.isPresent());
        assertEquals("https://github.com/vluddymo?tab=repositories", byId.get().getLinkUrl());

    }

    @Test
    public void AddGalleryItemShouldAddNewGalleryItemToDatabase() {

        //GIVEN
        NoteGalleryItem firstItem = new NoteGalleryItem("23", "345", "https://github.com/vluddymo");
        NoteGalleryItem secondItem = new NoteGalleryItem("123", "567", "https://github.com/vluddymo");
        noteGalleryItemDb.save(firstItem);
        noteGalleryItemDb.save(secondItem);

        String noteId = "7890";

        String url = "http://localhost:" + port + "/api/content/" + noteId + "/galleryItem";
        HttpHeaders headers = new HttpHeaders();
        NoteGalleryItemDto noteGalleryItemDto = new NoteGalleryItemDto("https://github.com/vluddymo?tab=repositories");
        HttpEntity<NoteGalleryItemDto> requestEntity = new HttpEntity<>(noteGalleryItemDto, headers);

        //WHEN
        ResponseEntity<NoteGalleryItem> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, NoteGalleryItem.class);

        //THEN
        long amountOfItems = noteGalleryItemDb.count();

        assertNotNull(putResponse.getBody());
        assertEquals(amountOfItems, 3);
        assertEquals(putResponse.getStatusCode(), HttpStatus.OK);
        assertEquals(putResponse.getBody().getNoteId(), "7890");

        Optional<NoteGalleryItem> byId = noteGalleryItemDb.findById(putResponse.getBody().galleryItemId);
        assertTrue(byId.isPresent());
        assertEquals("https://github.com/vluddymo?tab=repositories", byId.get().getImgUrl());

    }
}