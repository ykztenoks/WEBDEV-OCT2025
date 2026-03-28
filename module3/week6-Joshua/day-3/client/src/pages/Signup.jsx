import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleSignupUser(e) {
    e.preventDefault();
    //this is where we create the form data and send it to the server
    const image = e.target.image.files[0];
    const ourFormData = new FormData();
    ourFormData.append("imageUrl", image);
    ourFormData.append("username", username);
    ourFormData.append("email", email);
    ourFormData.append("password", password);
    try {
      const newCreatedUser = await axios.post(
        "http://localhost:5005/auth/signup",
        ourFormData,
      );
      console.log("user created", newCreatedUser);
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Sign up with us</h1>
      <form onSubmit={handleSignupUser}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Profile Picture:
          <input type="file" name="image" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};
