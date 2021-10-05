package de.vluddymo.note_board.model;

import de.vluddymo.note_board.model.noteContent.NoteAppointment;
import de.vluddymo.note_board.model.noteContent.NoteGalleryItem;
import de.vluddymo.note_board.model.noteContent.NoteLink;
import de.vluddymo.note_board.model.noteContent.NoteToDo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NotesContent {

    private Iterable<NoteAppointment> appointments;
    private Iterable<NoteGalleryItem> gallery;
    private Iterable<NoteToDo> todos;
    private Iterable<NoteLink> links;

}
