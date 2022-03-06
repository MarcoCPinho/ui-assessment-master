import { ISalesOverview } from 'interfaces';
import React from 'react';
import { Container, Upload, LinesSaved } from './styles';

export const UploadSucessAndLinesSavedContainer: React.FC<ISalesOverview> = ({
  salesOverview: { successfulUploads, linesSaved },
}) => {
  return (
    <Container>
      <Upload>
        <span>{successfulUploads}%</span>
        <span>UPLOAD SUCCESS</span>
      </Upload>
      <LinesSaved>
        <span>{linesSaved}%</span>
        <span>LINES SAVED</span>
      </LinesSaved>
    </Container>
  );
};
