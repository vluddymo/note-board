package de.vluddymo.note_board.model.noteContent;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoteAppointment {

    @Id
    public String id;
    public String description;
    public String date;
    public String time;
    public boolean onAlert;
}
