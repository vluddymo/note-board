package de.vluddymo.note_board.controller;

import de.vluddymo.note_board.model.Note;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class NoteControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @Test
    public void GetNotesShouldReturnAllNotes(){

        //GIVEN
        String url = "http://localhost:"+port+"/api/notes";

        //WHEN
        ResponseEntity<Note[]> response = restTemplate.getForEntity(url, Note[].class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);

        Note[] notes = response.getBody();

        assertEquals(notes.length, 2);
        assertEquals(notes[0], new Note("1", "first Note"));
        assertEquals(notes[1], new Note("2", "second Note"));

    }

}