package br.com.notes.entity;

import br.com.notes.dto.UserDTO;
import br.com.notes.entity.generic.EntityAbstract;

import javax.persistence.*;

@Entity
@Table(name = "notes")
@AttributeOverride(name = "id", column = @Column(name = "id_note"))
@SequenceGenerator(name = "SQ_GENERATOR", sequenceName = "note_sequence", allocationSize = 1)
public class NoteEntity extends EntityAbstract {

    @Column(name = "name")
    private String name;

    @Column(name = "value")
    private String value;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user")
    private UserEntity user;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}
