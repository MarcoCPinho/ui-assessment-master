import { faCircleInfo, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISalesOverview } from 'interfaces';
import React from 'react';
import { Container } from './styles';

export const SalesContainer: React.FC<ISalesOverview> = ({
  salesOverview: { lastUploadDate, uploads, linesAttempted },
}) => {
  return (
    <Container>
      <div>
        <div>
          <FontAwesomeIcon icon={faUpload} color="#00a9e4" />
          <span>Sales</span>
        </div>
        <span
          title={`Last Connections: ${new Date(lastUploadDate).toUTCString()}`}
        >
          <FontAwesomeIcon icon={faCircleInfo} color="#959292" />
        </span>
      </div>
      <span>
        You had <span>{uploads} uploads</span> and
        <span> {linesAttempted}</span> lines added
      </span>
    </Container>
  );
};
