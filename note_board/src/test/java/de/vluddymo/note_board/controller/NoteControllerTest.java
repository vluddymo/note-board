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

        Note firstNote = new Note("23", "Bachelorarbeit", "Das Finale meines Studiums. Es gibt noch Einiges zu tun, aber anschließend beginnt ein neues Kapitel in meinem Leben","21. Septmeber 2021" ,false, "");
        Note secondNote = new Note("123", "Masterarbeit", "Das Finale meines Studiums. Es gibt noch Einiges zu tun, aber anschließend beginnt ein neues Kapitel in meinem Leben","23. Septmeber 2021" ,false, "");
        noteDb.save(firstNote);
        noteDb.save(secondNote);

        //WHEN
        ResponseEntity<Note[]> response = restTemplate.getForEntity(url, Note[].class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);

        Note[] notes = response.getBody();

        assertNotNull(notes);
        assertEquals(notes.length, 2);
        assertEquals(notes[0].getTitle(), "Bachelorarbeit");
        assertEquals(notes[1].getTitle(),"Masterarbeit" );

    }

    @Test
    public void AddNoteShouldAddNewNoteToDatabase(){

        //GIVEN
        Note firstNote = new Note("23", "Bachelorarbeit", "Das Finale meines Studiums. Es gibt noch Einiges zu tun, aber anschließend beginnt ein neues Kapitel in meinem Leben","21. Septmeber 2021" ,false, "");
        Note secondNote = new Note("123", "Masterarbeit", "Das Finale meines Studiums. Es gibt noch Einiges zu tun, aber anschließend beginnt ein neues Kapitel in meinem Leben","23. Septmeber 2021" ,false, "");
        noteDb.save(firstNote);
        noteDb.save(secondNote);

        String url = "http://localhost:"+port+"/api/notes";
        HttpHeaders headers = new HttpHeaders();
        NoteDto noteDto = new NoteDto("Hi, Im the new Note", "Im brand new", false);
        HttpEntity<NoteDto> requestEntity = new HttpEntity<>(noteDto, headers);

        //WHEN
        ResponseEntity<Note> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Note.class);

        //THEN
        long amountOfNotes = noteDb.count();

        assertNotNull(putResponse.getBody());
        assertEquals(amountOfNotes, 3);
        assertEquals(putResponse.getStatusCode(), HttpStatus.OK);
        assertEquals(putResponse.getBody().getTitle(),"Hi, Im the new Note" );

        Optional<Note> byId = noteDb.findById(putResponse.getBody().getId());
        assertTrue(byId.isPresent());
        assertEquals("Hi, Im the new Note", byId.get().getTitle());

    }

    @Test
    public void DeleteNoteShouldDeleteANoteFromDatabase(){

        //GIVEN
        noteDb.save(new Note("1","note one", "note one content","10. Dezember 2020", false, ""));
        noteDb.save(new Note("2","note two","note two content","15. Dezember 2020", false, ""));
        noteDb.save(new Note("3","note three", "note three content", "18. September 2021", false, ""));

        String idOfNoteToDelete = "2";

        //WHEN
        String url = "http://localhost:"+port+"/api/notes/"+idOfNoteToDelete;
        HttpHeaders headers = new HttpHeaders();
        HttpEntity entity = new HttpEntity(headers);

        restTemplate.exchange(url,HttpMethod.DELETE,entity, Void.class);

        //THEN

        assertTrue(noteDb.findById(idOfNoteToDelete).isEmpty());
    }

    @Test
    public void EditNoteShouldChangeANoteInDatabase(){

        //GIVEN
        noteDb.save(new Note("1","note one", "note one content","10. Dezember 2020", false, ""));
        noteDb.save(new Note("2","note two","note two content","15. Dezember 2020", false, ""));
        noteDb.save(new Note("3","note three", "note three content", "18. September 2021", false, ""));

        String idOfNoteToEdit = "2";
        String updatedContent = "note has changed successfully";

        //WHEN
        String url = "http://localhost:"+port+"/api/notes/2/updateNote";
        HttpHeaders headers = new HttpHeaders();
        NoteDto noteDto = new NoteDto();
        noteDto.setContent(updatedContent);
        HttpEntity<NoteDto> requestEntity = new HttpEntity<>(noteDto, headers);

        ResponseEntity<Note> putResponse = restTemplate.exchange(url, HttpMethod.POST, requestEntity, Note.class);

        //THEN

        long amountOfNotes = noteDb.count();

        assertNotNull(putResponse.getBody());
        assertEquals(putResponse.getStatusCode(), HttpStatus.OK);

        assertEquals(3, amountOfNotes);
        assertTrue(noteDb.findById(idOfNoteToEdit).isPresent());
        assertEquals(noteDb.findById(idOfNoteToEdit).get().getTitle(),"note has changed successfully");
    }

    @Test
    public void GetNoteByIdShouldReturnRequestedNote(){

        //GIVEN
        noteDb.save(new Note("1","note one", "note one content","10. Dezember 2020", false, ""));
        noteDb.save(new Note("12345","you found me!","note two content","15. Dezember 2020", false, ""));
        noteDb.save(new Note("3","note three", "note three content", "18. September 2021", false, ""));

        String requestedId = "12345";
        String url = "http://localhost:"+port+"/api/notes/"+requestedId;

        //WHEN
        ResponseEntity<Note> response = restTemplate.getForEntity(url, Note.class);

        //THEN
        Note note = response.getBody();

        assertEquals(response.getStatusCode(), HttpStatus.OK);
        assertNotNull(note);
        assertEquals(note.getTitle(),"you found me!" );
    }

}