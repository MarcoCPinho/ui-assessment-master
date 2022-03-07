package br.com.notes.controller;

import br.com.notes.controller.generic.ControllerAbstract;
import br.com.notes.dto.UserDTO;
import br.com.notes.service.UserService;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(value = "/user")
public class UserController extends ControllerAbstract<UserDTO, UserService> {

    @ResponseBody
    @ApiOperation(value = "Try to login")
    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDTO> login(@RequestBody Map<String, Object> params) throws Exception {
        return new ResponseEntity<UserDTO>(this.getService().login(params), HttpStatus.OK);
    }

    @ResponseBody
    @ApiOperation(value = "Create an user")
    @PostMapping(value = "/signup", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> signup(@RequestBody Map<String, Object> params) throws Exception {
        this.getService().signup(params);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
