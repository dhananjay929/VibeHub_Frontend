import { createContext, useContext, useState } from "react";

// Create the authentication context
export const AuthContext = createContext();



// Create a context provider component
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to access the context
export const useAuth = () => {
  return useContext(AuthContext);
};
