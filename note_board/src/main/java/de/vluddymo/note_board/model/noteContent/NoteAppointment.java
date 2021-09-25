package de.vluddymo.note_board.model.noteContent;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "appointments")
public class NoteAppointment {

    @Id
    public String appointmentId;
    public String id;
    public String appointmentDescription;
    public String appointmentDate;
    public String appointmentTime;
    public Boolean onAlert;
}
