import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Login() {
  const [userN, setUserN] = useState(null);
  const [passW, setPassW] = useState(null);
  const [yesBob, setBob] = useState("/");
  const [fName, setfName] = useState(null);
  const [lName, setlName] = useState(null);
  const [pPic, setpPic] = useState(null);

  function sendData() {
    if (userN === "BobS" && passW === "thisPass") {
      setBob("/feed");
      setfName("Bob");
      setlName("Smith");
      setpPic(
        "https://images.unsplash.com/photo-1613210587443-348d07e782c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      );
    } else {
      setBob("/wronglogin");
      setfName(null);
      setlName(null);
      setpPic(null);
    }
  }
  useEffect(() => {
    sendData();
  }, [userN, passW]);

  return (
    <>
      <div className="bodyBackground">
        <div className="formCenter">
          <form action="" className="splashSign">
            <label>Splash Sign In</label>
            <div>
              <input
                type="text"
                name="username"
                className="username"
                placeholder="Username (BobS)"
                onChange={(e) => setUserN(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="password"
                className="password"
                placeholder="Password (thisPass)"
                onChange={(e) => setPassW(e.target.value)}
              />
            </div>
            <Link
              className="loginButtons"
              to={yesBob}
              state={{ fName, lName, userN, pPic }}
            >
              Log In
            </Link>

            <Link className="loginButtons" to="/signup">
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
