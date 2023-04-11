import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();
  const [textContent, setTextContent] = useState(null);

  const { lName, fName, userN, pPic } = location.state;
  const moreUsers = props.moreUsers;
  const setMoreUsers = props.setMoreUsers;
  console.log(textContent);
  function updateFeed() {
    const user = {
      firstName: fName,
      lastName: lName,
      avatarImg: pPic,
      textContent: textContent,
    };

    setMoreUsers([...moreUsers, user]);
  }
  return (
    <header>
      <div className="profContainer">
        <div className="profPic">
          <img src={pPic} alt="profile" />
        </div>
        <div className="userInfo">
          {userN}
          <br />
          {fName} {lName}
        </div>
      </div>
      <div className="texBox">
        <textarea
          className="text submit"
          onChange={(e) => setTextContent(e.target.value)}
        ></textarea>
      </div>
      <div className="submitButton" onClick={updateFeed}>
        Submit
      </div>
    </header>
  );
}

export default Header;
