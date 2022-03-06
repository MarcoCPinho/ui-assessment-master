package br.com.notes.service.generic;

import br.com.notes.converter.generic.ConverterAbstract;
import br.com.notes.dto.generic.DTOAbstract;
import br.com.notes.entity.generic.EntityAbstract;
import br.com.notes.repository.generic.IRepositoryAbsctract;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public abstract class ServiceAbstract<
        E extends EntityAbstract,
        D extends DTOAbstract,
        R extends IRepositoryAbsctract<E>,
        C extends ConverterAbstract<E, D, R>> {

    @Autowired
    private R respository;

    @Autowired
    private C converter;

    public D save(D dto) {
        E entity = getConverter().of(dto);
        getRespository().save(entity);
        return getConverter().of(entity);
    }

    public void delete(Long id) {
        Optional<E> entity = getRespository().findById(id);
        if (!entity.isPresent()) {
            throw new RuntimeException("Object not found!");
        }
        getRespository().delete(entity.get());
    }

    public D find(Long id) {
        Optional<E> entity = getRespository().findById(id);
        if (!entity.isPresent()) {
            throw new RuntimeException("Object not found!");
        }
        return getConverter().of(entity.get());
    }

    public List<D> findAll() {
        return getConverter().of(getRespository().findAll());
    }

    public R getRespository() {
        return respository;
    }

    public C getConverter() {
        return converter;
    }
}
