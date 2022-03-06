package br.com.notes.service;

import br.com.notes.converter.UserConverter;
import br.com.notes.dto.UserDTO;
import br.com.notes.entity.UserEntity;
import br.com.notes.repository.IUserRepository;
import br.com.notes.service.generic.ServiceAbstract;
import br.com.notes.util.CommonsUtil;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
@Transactional
public class UserService extends ServiceAbstract<
        UserEntity,
        UserDTO,
        IUserRepository,
        UserConverter> {

    public UserDTO login(Map<String, Object> params) throws Exception {
        String email = String.valueOf(params.get("email"));
        String password = String.valueOf(params.get("password"));

        UserEntity user = this.getRespository().findByEmailAndPassword(email, password);

        if (CommonsUtil.isNull(user))
            throw new Exception("TODO ERROR HANDLER (message: User not found or wrong password!)");

        return this.getConverter().of(user);
    }

    public void signup(Map<String, Object> params) throws Exception {
        String email = String.valueOf(params.get("email"));
        UserEntity userExists = this.getRespository().findByEmail(email);
        if (CommonsUtil.isNotNull(userExists))
            throw new Exception("TODO ERROR HANDLER (message: Email already in use!)");

        String name = String.valueOf(params.get("name"));
        String password = String.valueOf(params.get("password"));

        UserEntity newUser = new UserEntity();
        newUser.setName(name);
        newUser.setEmail(email);
        newUser.setPassword(password);

        this.getRespository().save(newUser);
    }
}
