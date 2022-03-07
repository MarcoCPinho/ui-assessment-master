package br.com.notes.service;

import br.com.notes.converter.NoteConverter;
import br.com.notes.dto.NoteDTO;
import br.com.notes.dto.UserDTO;
import br.com.notes.entity.NoteEntity;
import br.com.notes.entity.UserEntity;
import br.com.notes.repository.INoteRepository;
import br.com.notes.service.generic.ServiceAbstract;
import br.com.notes.util.CommonsUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional
public class NoteService extends ServiceAbstract<
        NoteEntity,
        NoteDTO,
        INoteRepository,
        NoteConverter> {

    @Autowired
    UserService userService;

    public List<NoteDTO> addOrUpdate(Map<String, Object> params) throws Exception {
        Object idNote = params.get("id");
        NoteDTO noteDTO = new NoteDTO();
        if (CommonsUtil.isNotNull(idNote)) {
            noteDTO = this.getConverter().of(this.getRespository().findById(Long.parseLong(String.valueOf(idNote))).get());
        } else {
            UserDTO user = userService.getConverter().of(userService.getRespository().findByEmail(String.valueOf(params.get("email"))));
            noteDTO.setUser(user);
        }

        noteDTO.setName(String.valueOf(params.get("name")));
        noteDTO.setValue(String.valueOf(params.get("value")));

        this.save(noteDTO);

        List<NoteDTO> listNoteDTO = this.getConverter().of(this.getRespository().findAllByUser(userService.getConverter().of(noteDTO.getUser())));
        return listNoteDTO;
    }

    public List<NoteDTO> findAllByUser(Long id) throws Exception {
        UserEntity user = userService.getRespository().findById(id).get();
        return this.getConverter().of(this.getRespository().findAllByUser(user));
    }

}
