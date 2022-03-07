package br.com.notes.entity;

import br.com.notes.entity.generic.EntityAbstract;

import javax.persistence.*;

@Entity
@Table(name = "users")
@AttributeOverride(name = "id", column = @Column(name = "id_user"))
@SequenceGenerator(name = "SQ_GENERATOR", sequenceName = "user_sequence", allocationSize = 1)
public class UserEntity extends EntityAbstract {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false)
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
