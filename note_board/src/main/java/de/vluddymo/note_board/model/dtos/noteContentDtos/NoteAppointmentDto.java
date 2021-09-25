package de.vluddymo.note_board.model.dtos.noteContentDtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoteAppointmentDto {

    private String appointmentDescription;
    private String appointmentDate;
    private String appointmentTime;
    private Boolean onAlert;

}
