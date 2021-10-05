package de.vluddymo.note_board.model.dtos.noteContentDtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoteGalleryItemDto {

    private String imgUrl;
    private String imgDescription;

}
