import React, { useState, useEffect } from "react";

export const ProfileLink = () => {
  const [user, setUser] = useState({});
  const fetchUser = async () => {};
  useEffect(() => {});
  return (
    <div className="profile-link">
      <span>{user.username}</span>
      <div style={{ backgroundImage: `url(${user.photo})` }}></div>
    </div>
  );
};
