import { IAccountOverviewStub } from 'interfaces';
import React from 'react';
import { AnimationContainer } from 'components/AnimationContainer';
import { Link } from 'react-router-dom';
import { FiPower, FiFileText } from 'react-icons/fi';
import { useAuth } from 'hooks/auth';
import { SalesContainer } from './components/SalesContainer';
import { UploadSucessAndLinesSavedContainer } from './components/UploadSucessAndLinesSavedContainer';
import { SupportCard } from './components/SupportCard';
import { Body, Container, Header, Support, SupportContanct } from './styles';

interface IAccountOverview {
  data: IAccountOverviewStub;
}

export const AccountOverview: React.FC<IAccountOverview> = ({
  data: { supportContact, salesOverview },
}) => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <div>My Account</div>
        <div>
          <Link to="/notes">
            <FiFileText />
            <span>Notes</span>
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
        <Support>
          <span>Account Overview</span>
          <SupportContanct>
            <span>YOUR SUPPORT CONTACT</span>
            <SupportCard supportContact={supportContact} />
          </SupportContanct>
        </Support>
        <Body>
          <SalesContainer salesOverview={salesOverview} />
          <UploadSucessAndLinesSavedContainer salesOverview={salesOverview} />
        </Body>
      </AnimationContainer>
    </Container>
  );
};
