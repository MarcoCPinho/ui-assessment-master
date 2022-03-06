export interface ISupportContact {
  supportContact: { name: string; email: string; phone: string };
}

export interface ISalesOverview {
  salesOverview: {
    uploads: number;
    successfulUploads: number;
    linesAttempted: number;
    linesSaved: number;
    lastUploadDate: number;
  };
}

export interface IAccountOverviewStub extends ISupportContact, ISalesOverview {}

export interface IErrors {
  [key: string]: string;
}

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IUser {
  id?: string;
  name: string;
  email: string;
}

export interface IAuthState {
  user: IUser;
}

export interface ISignInFormData {
  email: string;
  password: string;
}

export interface ISignUpCredentials {
  name: string;
  email: string;
  password: string;
}

export interface INote {
  id?: string;
  name: string | undefined;
  value: string | undefined;
}
