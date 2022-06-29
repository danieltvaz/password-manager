export type AuthContextType = {
  logged: boolean;
  login: (password: string) => void;
  logout: () => void;
};
