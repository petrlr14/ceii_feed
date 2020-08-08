import React, { useState } from "react";
import { Card, Avatar, Button, notification } from "antd";
import { HeartTwoTone, BookOutlined, FullscreenOutlined } from "@ant-design/icons";
import { like, savePost } from "./../services/post";
import Strings from "../utils/strings";
import { Link } from "react-router-dom";
const { Meta } = Card;

const Title = ({ user }) => {
  return (
    <Link to={`/profile/${user._id}`}>
      <div className="post-card-header">
        <Avatar src={user.photo} />
        <span>{user.username}</span>
      </div>
    </Link>
  );
};

const Image = ({ src }) => {
  return (
    <div
      className="image"
      style={{
        backgroundImage: `url(${src})`,
      }}></div>
  );
};

const Controls = ({ likes, id, loadPost }) => {
  const likePost = async () => {
    try {
      await like(id);
      await loadPost();
    } catch (e) {}
  };
  const save = async () => {
    try {
      await savePost(id);
      notification.success({ message: "Saved!" });
    } catch (e) {
      notification.error({ message: Strings.COMMON_ERRORS.INTERNAL });
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="like">
        <Button
          type={"link"}
          size="large"
          onClick={likePost}
          icon={<HeartTwoTone twoToneColor="#eb2f96" />}
        />
        <span>{likes}</span>
      </div>
      <Button onClick={save} type="link" size="large" icon={<BookOutlined />} />
    </div>
  );
};

export const Post = ({ post: { _id, image, title, description, likes, user }, loadPost }) => {
  return (
    <Card className="post" title={<Title user={user} />} cover={<Image src={image} />}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Controls likes={likes} id={_id} loadPost={loadPost} />
        <Meta title={title} description={description} />
      </div>
    </Card>
  );
};
