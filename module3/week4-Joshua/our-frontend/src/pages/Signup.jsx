import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const nav = useNavigate();
  async function handleSignup(e) {
    e.preventDefault();
    //create an object with all the data
    const userToSignup = { username, email, password };
    try {
      // const res = await fetch("http://localhost:5005/auth/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userToSignup),
      // });
      // const data = await res.json();
      const res = await axios.post(
        "http://localhost:5005/auth/signup",
        userToSignup,
      );
      console.log(res);
      nav("/login");
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage(error.response.data.errorMessage);
    }
  }
  return (
    <div>
      <h2>Sign up with us</h2>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Sigh up</button>
        {errorMessage ? <p className="error">{errorMessage}</p> : null}
      </form>
    </div>
  );
};
export default Signup;
