import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

export const LandingHeader = () => {
  return (
    <div className="header landing-header">
      <Button type="link" size="large">
        <Link to="/login">Sign in</Link>
      </Button>
      <Button type="ghost" size="large">
        <Link to="/signup">Sign up</Link>
      </Button>
    </div>
  );
};

export const AuthHeader = () => {
  return (
    <div className="header auth-header">
      <Button className="branding" type="link" size="large">
        <Link to="/">CEII Feed</Link>
      </Button>
    </div>
  );
};

export const FeedHeader = ({ user }) => {
  return (
    <div className="header feed-header">
      <div>
        <Button className="branding" type="link" size="large">
          <Link to="/home">CEII Feed</Link>
        </Button>
      </div>
      <Link to="/profile">
        <div className="info">
          <h2>{user.username ? user.username : "Loading..."}</h2>
          <Avatar src={user.photo} size={45} />
        </div>
      </Link>
    </div>
  );
};
