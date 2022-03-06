package br.com.notes.converter.generic;

import br.com.notes.dto.generic.DTOAbstract;
import br.com.notes.entity.generic.EntityAbstract;
import br.com.notes.repository.generic.IRepositoryAbsctract;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public abstract class ConverterAbstract<E extends EntityAbstract, D extends DTOAbstract, R extends IRepositoryAbsctract> {

    @Autowired
    private R repository;

    private Class<E> entityClass;

    private Class<D> dtoClass;

    public ConverterAbstract(Class<E> entityClass, Class<D> dtoClass) {
        this.entityClass = entityClass;
        this.dtoClass = dtoClass;
    }

    public E of(D dto) {

        if (dto == null) {
            return null;
        }

        E entity = null;

        if (dto.getId() != null) {
            Optional<E> optional = getRepository().findById(dto.getId());
            if (optional.isPresent()) {
                entity = optional.get();
            }
        }

        if (entity == null) {
            try {
                entity = this.entityClass.getConstructor().newInstance();
            } catch (Exception e) {
                return null;
            }
        }

        setAtributos(entity, dto);

        return entity;
    }

    public void setAtributos(E entity, D dto) {
    }

    public D of(E entity) {
        D dto = null;

        try {
            dto = this.dtoClass.getConstructor().newInstance();
        } catch (Exception e) {
            return null;
        }

        dto.setId(entity.getId());
        setAtributos(dto, entity);
        return dto;
    }

    public void setAtributos(D dto, E entity) {
    }

    public List<D> of(List<E> all) {
        return all.stream().map(this::of).collect(Collectors.toList());
    }

    public E getReference(D dto) {
        if (dto == null) {
            return null;
        }
        Optional<E> optional = getRepository().findById(dto.getId());
        if (optional.isPresent()) {
            return optional.get();
        }

        return null;
    }

    public R getRepository() {
        return repository;
    }
}
