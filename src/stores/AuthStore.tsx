import { create } from 'zustand';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

import type { UserToken } from '../types';

interface AuthStore {
  user: UserToken | undefined;
  login: ({ token }: { token: string }) => void;
  logout: () => void;
}

const defaultUser: () => UserToken | undefined = () => {
  const token = Cookies.get('token');
  if (token !== undefined) {
    return jwtDecode(token);
  }
};

const useAuthStore = create<AuthStore>((set) => ({
  user: defaultUser(),
  login: ({ token }: { token: string }) => {
    console.log(token);
    const userData: UserToken = jwtDecode(token);
    Cookies.set('token', token, { secure: true, sameSite: 'strict', expires: userData.exp });
    set({ user: userData });
  },
  logout: () => {
    set({ user: undefined });
    Cookies.remove('token');
  },
}));

export default useAuthStore;
