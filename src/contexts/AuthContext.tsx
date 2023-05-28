import React, { createContext, useState } from "react";
import {
  AuthContextProviderProps,
  AuthContextType,
  userAuthType,
} from "../types/types";
export const AuthContext = createContext<AuthContextType | null>(null);

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [userAuth, setUserAuth] = useState<userAuthType | null>(null);
  const value = { userAuth, setUserAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
