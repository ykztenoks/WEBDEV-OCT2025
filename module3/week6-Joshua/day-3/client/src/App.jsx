import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./pages/Signup";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
