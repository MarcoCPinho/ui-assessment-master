import {
  IAuthState,
  ISignInCredentials,
  ISignUpFormData,
  IUser,
} from 'interfaces';
import { cloneDeep } from 'lodash';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { api } from '../services/api';

interface AuthContextData {
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  createUser(signUpForm: ISignUpFormData): Promise<void>;
  // updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [mockedUsers, setMockedUsers] = useState<ISignUpFormData[]>([]);
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Feefo:token');
    const user = localStorage.getItem('@Feefo:user');

    if (token && user) {
      api.defaults.headers.common.Authorization = token;

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(
    async ({ email, password }) => {
      // const response = await api.post('login', {
      //   email,
      //   password,
      // });

      const response = {
        data: {
          user: {
            name: 'John Smith',
            email: 'john.smith@feefo.com',
          },
        },
      };

      const userFound = mockedUsers.find(user => user.email === email);

      if (userFound) {
        if (mockedUsers.find(user => user.password === password)) {
          response.data = {
            user: {
              name: userFound.name,
              email: userFound.email,
            },
          };
        } else {
          throw new Error('Wrong password!');
        }
      } else {
        throw new Error('User not found!');
      }

      const { user } = response.data;

      localStorage.setItem('@Feefo:user', JSON.stringify(user));

      setData({ user });
    },
    [mockedUsers],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Feefo:user');

    setData({} as IAuthState);
  }, []);

  // const updateUser = useCallback(
  //   (user: User) => {
  //     localStorage.setItem('@Feefo:user', JSON.stringify(user));

  //     setData({ token: data.token, user });
  //   },
  //   [data.token, setData],
  // );

  const createUser = useCallback(
    async (signUpForm: ISignUpFormData) => {
      const clonedMockedUsers = cloneDeep(mockedUsers);

      if (
        mockedUsers.filter(user => user.email === signUpForm.email).length > 0
      ) {
        throw new Error('E-mail already used!');
      }

      setMockedUsers([...clonedMockedUsers, { ...signUpForm }]);
    },
    [mockedUsers],
  );

  const AuthContextProps = useMemo(
    () => ({ user: data.user, signIn, signOut, createUser /* updateUser */ }),
    [data.user, signIn, signOut, createUser /* updateUser */],
  );

  return (
    <AuthContext.Provider value={AuthContextProps}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
