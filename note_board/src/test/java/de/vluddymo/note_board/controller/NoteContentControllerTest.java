package de.vluddymo.note_board.controller;

import de.vluddymo.note_board.database.noteContent.NoteAppointmentMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteGalleryItemMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteLinkMongoDB;
import de.vluddymo.note_board.database.noteContent.NoteTodoMongoDB;
import de.vluddymo.note_board.model.Note;
import de.vluddymo.note_board.model.dtos.NoteDto;
import de.vluddymo.note_board.model.dtos.noteContentDtos.NoteAppointmentDto;
import de.vluddymo.note_board.model.noteContent.NoteAppointment;
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
    public void resetDatabase(){

        noteAppointmentDb.deleteAll();
        noteGalleryItemDb.deleteAll();
        noteLinkDb.deleteAll();
        noteTodoDb.deleteAll();
    }

    @Test
    public void AddAppointmentShouldAddNewAppointmentToDatabase(){

        //GIVEN
        NoteAppointment firstAppointment = new NoteAppointment("23","345", "Bachelorarbeit", "21. Septmeber 2021","13:30 Uhr", true);
        NoteAppointment secondAppointment = new NoteAppointment("123","567", "Masterarbeit", "25. September 2021","15:00 Uhr", true);
        noteAppointmentDb.save(firstAppointment);
        noteAppointmentDb.save(secondAppointment);

        String noteId = "7890";

        String url = "http://localhost:"+port+"/api/content/"+noteId+"/appointment";
        HttpHeaders headers = new HttpHeaders();
        NoteAppointmentDto noteAppointmentDto = new NoteAppointmentDto("neuer termin", "30. September 2021", "16:00 Uhr", true);
        HttpEntity<NoteAppointmentDto> requestEntity = new HttpEntity<>(noteAppointmentDto, headers);

        //WHEN
        ResponseEntity<NoteAppointment> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, NoteAppointment.class);

        //THEN
        long amountOfNotes = noteAppointmentDb.count();

        assertNotNull(putResponse.getBody());
        assertEquals(amountOfNotes, 3);
        assertEquals(putResponse.getStatusCode(), HttpStatus.OK);
        assertEquals(putResponse.getBody().getAppointmentDescription(),"neuer termin" );

        Optional<NoteAppointment> byId = noteAppointmentDb.findById(putResponse.getBody().getAppointmentId());
        assertTrue(byId.isPresent());
        assertEquals("30. September 2021", byId.get().getAppointmentDate());

    }


}