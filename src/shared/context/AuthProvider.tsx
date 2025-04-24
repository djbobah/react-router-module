import { createContext, ReactNode, use, useState } from "react";
import { AuthContextType, SignInProps, UserType } from "../types";

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  return use(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(() => {
    const userItem = localStorage.getItem("user");
    return userItem ? JSON.parse(userItem) : null;
  });

  const signIn = (props: SignInProps) => {
    const { newUser, callback } = props;
    setUser(newUser);
    newUser && localStorage.setItem("user", JSON.stringify(newUser));
    callback();
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user: user,
    signIn: signIn,
    signOut: signOut,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};
