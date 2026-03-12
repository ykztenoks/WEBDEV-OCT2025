import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
const AuthWrapper = ({ children }) => {
  //these are the states that control the current User
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //this is to navigate after verifying
  const nav = useNavigate();

  //this is a function to validate the token in the local storage
  const authenticateUser = async function () {
    try {
      const theToken = localStorage.getItem("authToken");
      if (!theToken) {
        setIsLoading(false);
        setIsLoggedIn(false);
        setCurrentUserId(null);
        return;
      }
      const { data } = await axios.get("http://localhost:5005/auth/verify", {
        headers: {
          authorization: `Bearer ${theToken}`,
        },
      });

      setIsLoggedIn(true);
      setCurrentUserId(data.currentUser);
    } catch (error) {
      console.log(error.response.data.errorMessage);
      setIsLoggedIn(false);
      setCurrentUserId(null);
    } finally {
      setIsLoading(false);
    }
  };
  // logout function that deletes the token from local storage and navs to login
  function handleLogout() {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    nav("/login");
  }

  useEffect(() => {
    authenticateUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        currentUserId,
        authenticateUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthWrapper };
