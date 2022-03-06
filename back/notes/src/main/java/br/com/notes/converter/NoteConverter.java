package br.com.notes.converter;

import br.com.notes.converter.generic.ConverterAbstract;
import br.com.notes.dto.NoteDTO;
import br.com.notes.entity.NoteEntity;
import br.com.notes.repository.INoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NoteConverter extends ConverterAbstract<
        NoteEntity,
        NoteDTO,
        INoteRepository> {

    @Autowired
    UserConverter userConverter;

    public NoteConverter() {
        super(NoteEntity.class, NoteDTO.class);
    }

    @Override
    public void setAtributos(NoteEntity entity, NoteDTO dto) {
        entity.setName(dto.getName());
        entity.setUser(userConverter.of(dto.getUser()));
        entity.setValue(dto.getValue());
    }

    @Override
    public void setAtributos(NoteDTO dto, NoteEntity entity) {
        dto.setName(entity.getName());
        dto.setUser(userConverter.of(entity.getUser()));
        dto.setValue(entity.getValue());
    }
}
