import { AnimationContainer } from 'components/AnimationContainer';
import { useAuth } from 'hooks/auth';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiPower, FiUser } from 'react-icons/fi';
import { BiEnvelope, BiEnvelopeOpen, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { INote } from 'interfaces';
import { api } from 'services/api';
import { toast } from 'react-toastify';
import {
  Container,
  Header,
  Body,
  TextArea,
  NotesArea,
  Note,
  TextAreaButtons,
  ButtonsContainer,
} from './styles';

export const Notes: React.FC = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [notes, setNotes] = useState<INote[]>([]);
  const [selectedNote, setSelectedNote] = useState<INote>({
    id: '',
    name: '',
    value: '',
  });
  const { signOut, user } = useAuth();

  const handleOnChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'textArea':
        if (textAreaRef.current?.value) textAreaRef.current.value = value;
        break;

      default:
        if (inputRef.current?.value) inputRef.current.value = value;
        break;
    }
  }, []);

  const handleAddOrChange = useCallback(async () => {
    try {
      const objectToSend = {
        name: inputRef.current?.value,
        value: textAreaRef.current?.value,
        email: user.email,
      };

      if (selectedNote?.id) {
        Object.assign(objectToSend, { id: selectedNote?.id });
      }

      const response = await api.post('api/note/addOrUpdate', objectToSend);

      setNotes(response.data);

      if (textAreaRef.current?.value) textAreaRef.current.value = '';
      if (inputRef.current?.value) inputRef.current.value = '';
      setSelectedNote({ id: '', name: '', value: '' });
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : 'Something went wrong!',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    }
  }, [selectedNote, user.email]);

  const handleClear = useCallback(() => {
    if (textAreaRef.current?.value) textAreaRef.current.value = '';
    if (inputRef.current?.value) inputRef.current.value = '';
    setSelectedNote({ id: '', name: '', value: '' });
  }, []);

  const handleOpenNote = useCallback(note => {
    setSelectedNote(note);
    if (inputRef?.current) inputRef.current.value = note.name;
    if (textAreaRef?.current) textAreaRef.current.value = note.value;
  }, []);

  const handleRemoveNote = useCallback(
    async note => {
      await api.delete(`api/note/${note.id}`);
      const response = await api.post(`api/note/findAllByUser/${user.id}`);
      setNotes(response.data);
      handleClear();
    },
    [handleClear, user.id],
  );

  useEffect(() => {
    api.post(`api/note/findAllByUser/${user.id}`).then(response => {
      setNotes(response.data);
    });
  }, [user.id]);

  return (
    <Container>
      <Header>
        <div>My Notes</div>
        <div>
          <Link to="/my-account">
            <FiUser />
            <span>My Account</span>
          </Link>
          <Link to="/">
            <FiPower />
            <button type="button" onClick={signOut}>
              Logout
            </button>
          </Link>
        </div>
      </Header>
      <AnimationContainer>
        <Body>
          <TextArea>
            <input
              placeholder="Your note name..."
              name="input"
              ref={inputRef}
              type="text"
              onChange={handleOnChange}
            />
            <textarea
              placeholder="Your note..."
              name="textArea"
              ref={textAreaRef}
              onChange={handleOnChange}
            />
            <TextAreaButtons>
              <div>
                <button type="button" onClick={handleClear}>
                  Clear all
                </button>
                <button type="button" onClick={handleAddOrChange}>
                  {selectedNote.id ? 'Change Note' : 'Add Note'}
                </button>
              </div>
            </TextAreaButtons>
          </TextArea>
          <NotesArea>
            <div>List of My Notes</div>
            {notes.map(note => (
              <Note key={String(note.id)}>
                <div>Name: {note.name}</div>
                <ButtonsContainer>
                  <button type="button" onClick={() => handleOpenNote(note)}>
                    {selectedNote.id === note.id ? (
                      <BiEnvelopeOpen />
                    ) : (
                      <BiEnvelope />
                    )}
                  </button>
                  <button type="button" onClick={() => handleRemoveNote(note)}>
                    <BiTrash />
                  </button>
                </ButtonsContainer>
              </Note>
            ))}
          </NotesArea>
        </Body>
      </AnimationContainer>
    </Container>
  );
};
