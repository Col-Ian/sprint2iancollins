import React, { useState } from "react";

function Users(props) {
  const { firstName, lastName, avatarImg, textContent } = props.value;
  const [heartButton, setHeartButton] = useState("favorite");

  function likeButton(e) {
    if (heartButton === "favorite") {
      setHeartButton("heart_plus");
    } else {
      setHeartButton("favorite");
    }
  }
  return (
    <div>
      <div className="feedPost">
        <div className="feedUser">
          <img src={avatarImg} alt="profpic" />
          <div className="feedUserInfo">
            {firstName} {lastName}
          </div>
        </div>
        <p>{textContent}</p>
        <div className="feedButton" onClick={likeButton}>
          <span className="material-symbols-outlined">{heartButton}</span>
        </div>
      </div>
    </div>
  );
}

export default Users;
