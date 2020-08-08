import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { loadProfile } from "../services/post";
import { Posts } from "../components/posts";
import Avatar from "antd/lib/avatar/avatar";
import { Button } from "antd";
export const Profile = ({ user }) => {
  const match = useRouteMatch();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await loadProfile(match.params.id || user._id);
        setProfile(data);
      } catch (e) {}
    };
    fetchProfile();
  }, [user, match]);
  return (
    <div className="profile-container">
      <div className="">
        <Avatar shape="square" size={200} src={profile.photo} />
        <h1>{profile.username}</h1>
        <h3>{profile.name}</h3>
        {(match.params.id === user._id || !match.params.id) && (
          <Link to="/edit">
            <Button>Edit Profile</Button>
          </Link>
        )}
      </div>
      <div className="feed-container">
        <Posts posts={profile.posts || []} />
      </div>
    </div>
  );
};

export const Porfile = () => {};
