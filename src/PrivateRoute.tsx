import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem('authToken');

  // If authenticated, render the child component; if not, redirect to login
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
