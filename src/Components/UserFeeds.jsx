import React, { useEffect, useState } from "react";
import Users from "./Users";

function UserFeeds(props) {
  const [users, setUsers] = useState(null);
  const { moreUsers } = props;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./FeedUpdate.json");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {moreUsers
          .map((user, index) => <Users key={index} value={user} />)
          .reverse()}
        {users &&
          users
            .map((user, index) => <Users key={index} value={user} />)
            .reverse()}
      </div>
    </>
  );
}

export default UserFeeds;
