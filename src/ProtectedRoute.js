import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import the useAuth hook

const ProtectedRoute = ({ element, ...props }) => {
  const { authenticated } = useAuth(); // Get authenticated status from context

  if (authenticated) {
    return <Route {...props} element={element} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
