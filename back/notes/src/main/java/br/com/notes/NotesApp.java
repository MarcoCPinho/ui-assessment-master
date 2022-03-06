package br.com.notes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@EnableAutoConfiguration
public class NotesApp {
    public static void main(String[] args) {
        SpringApplication.run(NotesApp.class, args);
    }
}
