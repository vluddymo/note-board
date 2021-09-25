package de.vluddymo.note_board.database.noteContent;

import de.vluddymo.note_board.model.noteContent.NoteLink;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface NoteLinkMongoDB extends PagingAndSortingRepository<NoteLink,String> {
}
