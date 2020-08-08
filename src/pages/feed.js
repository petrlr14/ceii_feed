import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { loadPost } from "../services/post";
import { Posts } from "./../components/posts";
import { PostForm } from "../components/post-form";

export const Feed = () => {
  const [posts, setPost] = useState([]);
  const fetchPost = async () => {
    const {
      data: { posts },
    } = await loadPost();
    setPost(posts);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="post-page">
      <div className="post-form">
        <PostForm fetchPost={fetchPost} />
      </div>
      <div className="feed-fixed feed-container">
        <Posts posts={posts} loadPost={fetchPost} />
      </div>
    </div>
  );
};
