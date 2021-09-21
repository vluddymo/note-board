package de.vluddymo.note_board.model.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoteDto {

    private String title;
    private String content;
    private Boolean onSchedule;
}
