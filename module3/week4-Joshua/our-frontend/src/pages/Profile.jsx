import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
export const Profile = () => {
  const [profileUser, setProfileUser] = useState({});
  const { currentUserId } = useContext(AuthContext);
  useEffect(() => {
    async function getProfileUser() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/auth/profile/${currentUserId}`,
        );

        setProfileUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProfileUser();
  }, [currentUserId]);
  return (
    <div>
      <h1>{profileUser.username}'s Profile</h1>
    </div>
  );
};
