import { createContext, useContext, useState, useMemo } from "react";
import Auth from "./auth";

export const CurrentUserContext = createContext();

export const useCurrentUserContext = () => useContext(CurrentUserContext);

export default function CurrentUserContextProvider({ children }) {

  let initialUser = { isAuthenticated: false };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const user = Auth.getProfile().data;
  const token = Auth.getToken();

  if (token) {
    initialUser = { user, isAuthenticated: true };
  }
  setCurrentUser(Auth.loggedIn(), { isAuthenticated: true });
  const isProvider = currentUser?.providerName !== undefined;

  const contextValue = useMemo(() => 
  ({
      currentUser,
      isProvider,
    }),
    [currentUser, isProvider]
  );

  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
}
