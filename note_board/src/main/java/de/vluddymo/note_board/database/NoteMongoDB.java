package de.vluddymo.note_board.database;

import de.vluddymo.note_board.model.Note;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface NoteMongoDB extends PagingAndSortingRepository<Note,String>{
}
