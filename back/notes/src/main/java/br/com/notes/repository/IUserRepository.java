package br.com.notes.repository;

import br.com.notes.entity.UserEntity;
import br.com.notes.repository.generic.IRepositoryAbsctract;

public interface IUserRepository extends IRepositoryAbsctract<UserEntity> {

    UserEntity findByEmail(String email);

    UserEntity findByEmailAndPassword(String email, String password);

}
