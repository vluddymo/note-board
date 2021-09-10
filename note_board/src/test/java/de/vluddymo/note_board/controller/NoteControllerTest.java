package de.vluddymo.note_board.controller;

import de.vluddymo.note_board.database.NoteMongoDB;
import de.vluddymo.note_board.model.Note;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

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

}