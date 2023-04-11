import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Feed from "./Components/Feed";

import WrongLogin from "./Components/WrongLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/wronglogin" element={<WrongLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
