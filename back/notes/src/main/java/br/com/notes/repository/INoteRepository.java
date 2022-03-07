package br.com.notes.repository;

import br.com.notes.entity.NoteEntity;
import br.com.notes.entity.UserEntity;
import br.com.notes.repository.generic.IRepositoryAbsctract;

import java.util.List;

public interface INoteRepository extends IRepositoryAbsctract<NoteEntity> {

    List<NoteEntity> findAllByUser(UserEntity user);

}
