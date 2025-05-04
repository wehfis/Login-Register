import { create } from 'zustand';

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

interface AuthState {
  user: UserData | null;
}

interface AuthActions {
  setUserData: (userData: UserData | null) => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  setUserData: (userData) => {
    set({
      user: userData,
    });
  },
}));

export const useCurrentUser = () => useAuthStore((state) => state.user);