import React from "react";

import { Post } from "./post";

export const Posts = ({ posts, loadPost }) => {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post._id} post={post} loadPost={loadPost} />;
      })}
      {posts.length === 0 && (
        <div className="post-fallback">
          <h1 style={{ alignSelf: "center" }}>Nothing here yet...</h1>
        </div>
      )}
    </>
  );
};
