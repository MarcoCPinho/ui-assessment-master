import { AnimationContainer } from 'components/AnimationContainer';
import { useAuth } from 'hooks/auth';
import React, { useCallback, useRef, useState } from 'react';
import { FiPower, FiUser } from 'react-icons/fi';
import { BiEnvelope, BiEnvelopeOpen, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { cloneDeep } from 'lodash';

import { INote } from 'interfaces';
import {
  Container,
  Header,
  Body,
  TextArea,
  NotesArea,
  Note,
  TextAreaButtons,
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
  const { signOut } = useAuth();

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

  const handleAdd = useCallback(() => {
    let newNote: INote;
    const clonedNotes = cloneDeep(notes);

    if (selectedNote.id) {
      const indexNote = clonedNotes.findIndex(
        item => item.id === selectedNote.id,
      );
      clonedNotes[indexNote].name = inputRef.current?.value;
      clonedNotes[indexNote].value = textAreaRef.current?.value;
      setNotes(clonedNotes);
    } else {
      newNote = {
        id: uuid(),
        name: textAreaRef.current?.value,
        value: textAreaRef.current?.value,
      };
      setNotes([...clonedNotes, { ...newNote }]);
    }

    if (textAreaRef.current?.value) textAreaRef.current.value = '';
    if (inputRef.current?.value) inputRef.current.value = '';
    setSelectedNote({ id: '', name: '', value: '' });
  }, [selectedNote, notes]);

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
    note => {
      const newNotes = notes.filter(item => item.id !== note.id);
      setNotes(newNotes);
      handleClear();
    },
    [notes, handleClear],
  );

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
                <button type="button" onClick={handleAdd}>
                  {selectedNote.id ? 'Change Note' : 'Add Note'}
                </button>
              </div>
            </TextAreaButtons>
          </TextArea>
          <NotesArea>
            <div>List of available Notes</div>
            {notes.map(note => (
              <Note key={note.id}>
                <div>Name: {note.name}</div>
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
              </Note>
            ))}
          </NotesArea>
        </Body>
      </AnimationContainer>
    </Container>
  );
};
