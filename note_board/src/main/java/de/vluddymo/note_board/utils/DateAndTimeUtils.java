package de.vluddymo.note_board.utils;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import java.time.format.FormatStyle;

@Service
public class DateAndTimeUtils {

    public String generateDateStamp(){
        DateTimeFormatter dtf = DateTimeFormatter.ofLocalizedDate(FormatStyle.MEDIUM);
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now);

    }

    public String formatAppointmentDate(String dateToFormat){
        DateTimeFormatter dtf = DateTimeFormatter.ofLocalizedDate(FormatStyle.MEDIUM);
        LocalDate date = LocalDate.parse(dateToFormat);
        return dtf.format(date);
    }
}
