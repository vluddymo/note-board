package de.vluddymo.note_board.database.noteContent;

import de.vluddymo.note_board.model.noteContent.NoteGalleryItem;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface NoteGalleryItemMongoDB extends PagingAndSortingRepository<NoteGalleryItem,String> {
}
