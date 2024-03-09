import React, { useState } from "react";
import { users } from "../../config/data";
export default function SearhUser() {
  const [allUsers, setAllUsers] = useState(users);

  const handleChange = (e) => {
    const updatedUSers = allUsers.filter((user) => {
      return user.name.includes(e.target.value);
    });
    setAllUsers(updatedUSers);
  };
  return (
    <div className="containerSeachUSer">
      <input
        type="text"
        placeholder="search User"
        name="userName"
        onChange={handleChange}
      />

      <div>
        {allUsers.map((user) => {
          return <div>{user.name}</div>;
        })}
      </div>
    </div>
  );
}
