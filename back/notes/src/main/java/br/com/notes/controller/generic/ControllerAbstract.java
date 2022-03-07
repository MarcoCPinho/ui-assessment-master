package br.com.notes.controller.generic;

import br.com.notes.dto.generic.DTOAbstract;
import br.com.notes.service.generic.ServiceAbstract;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Component
public abstract class ControllerAbstract<D extends DTOAbstract, S extends ServiceAbstract> {

    @Autowired
    private S service;

    @ResponseBody
    @ApiOperation(value = "Save object")
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<D> save(@RequestBody @Valid D dto) throws Exception {
        return new ResponseEntity(getService().save(dto), HttpStatus.OK);
    }

    @ResponseBody
    @ApiOperation(value = "Update object")
    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<D> update(@RequestBody @Valid D dto) throws Exception {
        return new ResponseEntity(getService().save(dto), HttpStatus.OK);
    }

    @ApiOperation(value = "Delete object")
    @DeleteMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "/{id:[0-9]+}")
    public ResponseEntity<Void> deletar(@PathVariable("id") Long id) throws Exception {
        getService().delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value = "Find object")
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, value = "/{id:[0-9]+}")
    public ResponseEntity<D> find(@PathVariable("id") Long id) throws Exception {
        return new ResponseEntity(getService().find(id), HttpStatus.OK);
    }

    @ApiOperation(value = "Find all objects")
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<D>> findAll() throws Exception {
        return new ResponseEntity(getService().findAll(), HttpStatus.OK);
    }

    public S getService() {
        return service;
    }
}
