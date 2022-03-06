// import { useAuth } from 'hooks/auth';
import { Route, Routes } from 'react-router-dom';
import { AccountOverview } from 'pages/AccountOverview';
import { Notes } from 'pages/Notes';
import { SignIn } from 'pages/SignIn';
import { IAccountOverviewStub } from 'interfaces';
import { SignUp } from 'pages/SignUp';

const accountOverviewStub: IAccountOverviewStub = {
  supportContact: {
    name: 'John Doe',
    email: 'john.doe@notes.com',
    phone: '020 3362 4208',
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route index element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />

    <Route
      path="/my-account"
      element={<AccountOverview data={accountOverviewStub} />}
    />

    <Route path="/notes" element={<Notes />} />
  </Routes>
);
