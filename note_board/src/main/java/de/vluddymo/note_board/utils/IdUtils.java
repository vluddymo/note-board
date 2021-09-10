package de.vluddymo.note_board.utils;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class IdUtils {

    public String generateRandomId(){
        return UUID.randomUUID().toString();
    }
}
