package br.com.notes.dto;

import br.com.notes.dto.generic.DTOAbstract;
import com.fasterxml.jackson.annotation.JsonInclude;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDTO extends DTOAbstract {

    @NotNull(message = "The user need an name")
    private String name;

    @NotNull(message = "The user need an password")
    private String password;

    @NotNull(message = "Invalid e-mail")
    @Email(message = "Invalid e-mail")
    private String email;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
