import { createContext, useContext, useState, useMemo } from "react";
import Auth from "../utils/auth";
export const CurrentUserContext = createContext();

export const useCurrentUserContext = () => useContext(CurrentUserContext);

export default function CurrentUserContextProvider({ children }) {
  let initialUser = { isAuthenticated: false };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const isProvider = currentUser?.providerName !== undefined;

  setCurrentUser(Auth.loggedIn(), { isAuthenticated: true });

  const contextValue = useMemo(
    () => ({
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
