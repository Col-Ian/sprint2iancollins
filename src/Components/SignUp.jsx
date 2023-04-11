import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function SignUp() {
  const [userN, setUserN] = useState("Should'veMadeOne");
  const [passW, setPassW] = useState(null);
  const [fName, setfName] = useState("Default");
  const [lName, setlName] = useState("Name");
  const [pPic, setpPic] = useState(
    "https://images.unsplash.com/photo-1613210587443-348d07e782c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );
  var lizardPic =
    "https://images.unsplash.com/photo-1615798763618-183906cd14b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80";
  var catPic =
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
  var dogPic =
    "https://images.unsplash.com/photo-1613210595795-4a4681b35e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  const choosePic = (event) => {
    setpPic(event.target.value);
  };
  return (
    <>
      <div className="bodyBackground">
        <div className="formCenter">
          <form action="" className="splashSignUp">
            <div className="inputWrapper">
              <label>First Name </label>
              <input
                type="text"
                name="First Name"
                className="fName"
                onChange={(e) => setfName(e.target.value)}
              />
            </div>
            <div className="inputWrapper">
              <label>Last Name </label>
              <input
                type="text"
                name="Last Name"
                className="lName"
                onChange={(e) => setlName(e.target.value)}
              />
            </div>
            <div className="inputWrapper">
              <label>Username </label>
              <input
                type="text"
                name="Username"
                className="userN"
                onChange={(e) => setUserN(e.target.value)}
              />
            </div>
            <div className="inputWrapper">
              <label>Password </label>
              <input
                type="text"
                name="Password"
                className="passW"
                onChange={(e) => setPassW(e.target.value)}
              />
            </div>

            <div className="profPicker">
              <div className="profPic">
                <img src={dogPic} alt="dogPic" />
                <input
                  type="radio"
                  id="cavIMG"
                  name="profPicChoice"
                  value={dogPic}
                  checked={pPic === dogPic}
                  onChange={choosePic}
                />
              </div>
              <div className="profPic">
                <img src={catPic} alt="catPic" />
                <input
                  type="radio"
                  id="catIMG"
                  name="profPicChoice"
                  value={catPic}
                  checked={pPic === catPic}
                  onChange={choosePic}
                />
              </div>
              <div className="profPic">
                <img src={lizardPic} alt="lizardPic" />
                <input
                  type="radio"
                  id="lizIMG"
                  name="profPicChoice"
                  value={lizardPic}
                  checked={pPic === lizardPic}
                  onChange={choosePic}
                />
              </div>
            </div>

            <Link
              className="loginButtons"
              to="/feed"
              state={{ fName, lName, userN, pPic, passW }}
            >
              Log In
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
