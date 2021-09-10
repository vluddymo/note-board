package de.vluddymo.note_board.controller;

import de.vluddymo.note_board.database.NoteMongoDB;
import de.vluddymo.note_board.model.Note;
import de.vluddymo.note_board.model.dtos.NoteDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class NoteControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    public NoteMongoDB noteDb;

    @BeforeEach
    public void resetDatabase(){
        noteDb.deleteAll();
    }

    @Test
    public void GetNotesShouldReturnAllNotes(){

        //GIVEN
        String url = "http://localhost:"+port+"/api/notes";
        Note firstNote = new Note("23", "test one");
        Note secondNote = new Note("324", "test two");
        noteDb.save(firstNote);
        noteDb.save(secondNote);

        //WHEN
        ResponseEntity<Note[]> response = restTemplate.getForEntity(url, Note[].class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);

        Note[] notes = response.getBody();

        assertEquals(notes.length, 2);
        assertEquals(notes[0], new Note("23", "test one"));
        assertEquals(notes[1], new Note("324", "test two"));

    }

    @Test
    public void AddNoteShouldAddNewNoteToDatabase(){

        //GIVEN
        noteDb.save(new Note("1", "note one"));
        noteDb.save(new Note("2", "note two"));


        String url = "http://localhost:"+port+"/api/notes";
        HttpHeaders headers = new HttpHeaders();
        NoteDto noteDto = new NoteDto("Hi, Im the new Note");
        HttpEntity<NoteDto> requestEntity = new HttpEntity<>(noteDto, headers);

        //WHEN
        ResponseEntity<Note> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Note.class);

        //THEN
        long amountOfNotes = noteDb.count();

        assertNotNull(putResponse.getBody());
        assertEquals(amountOfNotes, 3);
        assertEquals(putResponse.getStatusCode(), HttpStatus.OK);
        assertEquals(putResponse.getBody().getContent(),"Hi, Im the new Note" );

        Optional<Note> byId = noteDb.findById(putResponse.getBody().getId());
        assertTrue(byId.isPresent());
        assertEquals("Hi, Im the new Note", byId.get().content);

    }

}