package de.vluddymo.note_board.database.noteContent;

import de.vluddymo.note_board.model.noteContent.NoteToDo;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface NoteTodoMongoDB extends PagingAndSortingRepository<NoteToDo,String> {
}
