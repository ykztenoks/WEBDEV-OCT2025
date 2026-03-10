import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  console.log("inside the route protector");
  //grad data from the context
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  //check if the page is loading
  if (isLoading) {
    return <p>Loading...</p>;
  }
  //check if the user is NOT logged in
  if (!isLoggedIn) {
    return <Navigate to={`/login`} />;
  }
  return children;
};
