package de.vluddymo.note_board.model.noteContent;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "todos")
public class NoteToDo {

    @Id
    public String todoId;
    public String noteId;
    public String task;
    public Boolean isTaskDone;
}
