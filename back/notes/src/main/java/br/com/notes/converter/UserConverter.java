package br.com.notes.converter;

import br.com.notes.converter.generic.ConverterAbstract;
import br.com.notes.dto.UserDTO;
import br.com.notes.entity.UserEntity;
import br.com.notes.repository.IUserRepository;
import org.springframework.stereotype.Component;

@Component
public class UserConverter extends ConverterAbstract<
        UserEntity,
        UserDTO,
        IUserRepository> {


    public UserConverter() {
        super(UserEntity.class, UserDTO.class);
    }

    @Override
    public void setAtributos(UserEntity entity, UserDTO dto) {
        entity.setName(dto.getName());
        entity.setPassword(dto.getPassword());
        entity.setEmail(dto.getEmail());
    }

    @Override
    public void setAtributos(UserDTO dto, UserEntity entity) {
        dto.setName(entity.getName());
        dto.setPassword(entity.getPassword());
        dto.setEmail(entity.getEmail());
    }
}
