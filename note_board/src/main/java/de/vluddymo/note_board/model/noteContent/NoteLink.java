package de.vluddymo.note_board.model.noteContent;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "links")
public class NoteLink {

    @Id
    public String linkId;
    public String id;
    public String linkDescription;
    public String linkUrl;

}
