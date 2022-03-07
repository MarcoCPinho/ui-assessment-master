import { IAuthState, ISignInCredentials, IUser } from 'interfaces';
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
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Notes:token');
    const user = localStorage.getItem('@Notes:user');

    if (token && user) {
      api.defaults.headers.common.Authorization = token;

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async credentials => {
    const response = await api.post('api/user/login', credentials);
    const user = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
    };
    localStorage.setItem('@Notes:user', JSON.stringify(user));
    setData({ user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Notes:user');
    setData({} as IAuthState);
  }, []);

  const AuthContextProps = useMemo(
    () => ({ user: data.user, signIn, signOut }),
    [data.user, signIn, signOut],
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
