package br.com.notes.repository.generic;

import br.com.notes.entity.generic.EntityAbstract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface IRepositoryAbsctract<E extends EntityAbstract> extends JpaRepository<E, Long> {
}
