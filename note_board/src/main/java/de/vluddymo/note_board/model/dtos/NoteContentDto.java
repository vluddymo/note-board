package de.vluddymo.note_board.model.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoteContentDto {

    private Boolean isAppointment;
    private Boolean isLink;
    private Boolean isTodo;
    private Boolean isGalleryItem;
    private String id;
    private String appointmentDescription;
    private String appointmentDate;
    private String appointmentTime;
    private Boolean onAlert;
    private String imgUrl;
    private String linkDescription;
    private String linkUrl;
    private String task;
    private Boolean isTaskDone;


}
