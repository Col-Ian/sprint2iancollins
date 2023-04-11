import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import UserFeeds from "./UserFeeds";

export default function Feed() {
  const location = useLocation();

  const { lName, fName, userN, pPic } = location.state;

  let initialMoreUsers = [];
  const lsMoreUsers = localStorage.getItem("moreUsers");
  if (lsMoreUsers) {
    initialMoreUsers = JSON.parse(lsMoreUsers);
  }

  const [moreUsers, setMoreUsers] = useState(initialMoreUsers);

  useEffect(() => {
    localStorage.setItem("moreUsers", JSON.stringify(moreUsers));
  }, [moreUsers]);

  return (
    <div className="feedBack">
      <Header
        moreUsers={moreUsers}
        setMoreUsers={setMoreUsers}
        state={{ lName, fName, userN, pPic }}
      />
      <main className="mainFeed">
        <div>
          <UserFeeds moreUsers={moreUsers} />
        </div>
      </main>
    </div>
  );
}
