import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISupportContact } from 'interfaces';
import React from 'react';
import { CaptionLetter, Container, Info } from './styles';

export const SupportCard: React.FC<ISupportContact> = ({
  supportContact: { name, email, phone },
}) => {
  return (
    <Container>
      <CaptionLetter>{name.charAt(0).toLocaleUpperCase()}</CaptionLetter>
      <div>
        <p>{name}</p>
        <Info>
          <FontAwesomeIcon icon={faEnvelope} color="#959292" />
          <span>{email}</span>
          <span>{phone}</span>
        </Info>
      </div>
    </Container>
  );
};
