package de.vluddymo.note_board.model.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EditNoteDto {

    private String id;
    private String content;
}
