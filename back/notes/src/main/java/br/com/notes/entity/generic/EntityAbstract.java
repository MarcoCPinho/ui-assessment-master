package br.com.notes.entity.generic;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@DynamicUpdate
@DynamicInsert
@MappedSuperclass
public abstract class EntityAbstract {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SQ_GENERATOR")
    @Column(name = "id", nullable = false)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
