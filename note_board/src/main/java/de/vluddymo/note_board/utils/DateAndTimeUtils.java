package de.vluddymo.note_board.utils;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import java.time.format.FormatStyle;

@Service
public class DateAndTimeUtils {

    public String generateDateStamp(){
        DateTimeFormatter dtf = DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG);
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now);

    }
}
