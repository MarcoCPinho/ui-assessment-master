package br.com.notes.controller;

import br.com.notes.controller.generic.ControllerAbstract;
import br.com.notes.dto.NoteDTO;
import br.com.notes.service.NoteService;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/note")
public class NoteController extends ControllerAbstract<NoteDTO, NoteService> {

    @ResponseBody
    @ApiOperation(value = "Save or update an note")
    @PostMapping(value = "/addOrUpdate", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<NoteDTO>> addOrUpdate(@RequestBody Map<String, Object> params) throws Exception {
        return new ResponseEntity<List<NoteDTO>>(this.getService().addOrUpdate(params), HttpStatus.OK);
    }

    @ResponseBody
    @ApiOperation(value = "Find all notes by user")
    @PostMapping(value = "/findAllByUser/{id:[0-9]+}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<NoteDTO>> findAllByUser(@PathVariable("id") Long id) throws Exception {
        return new ResponseEntity<List<NoteDTO>>(this.getService().findAllByUser(id), HttpStatus.OK);
    }

}
