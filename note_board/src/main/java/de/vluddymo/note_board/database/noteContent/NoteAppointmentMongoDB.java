package de.vluddymo.note_board.database.noteContent;

import de.vluddymo.note_board.model.noteContent.NoteAppointment;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface NoteAppointmentMongoDB extends PagingAndSortingRepository<NoteAppointment,String> {
}
