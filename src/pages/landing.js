import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const LandingHeader = () => {
  return (
    <div className={css(headerStyle.header)}>
      <Button className={css(headerStyle.button)} type="link" size="large">
        <Link to="/login">Sign in</Link>
      </Button>
      <Button className={css(headerStyle.button)} type="ghost" size="large">
        <Link to="/signup">Sign up</Link>
      </Button>
    </div>
  );
};

const headerStyle = StyleSheet.create({
  header: {
    height: "100%",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    color: "white",
  },
});

export const LandingPage = () => {
  return (
    <div className={css(mainStyle.container)}>
      <div>
        <img className={css(mainStyle.cover)} src={"/img/man.jpg"} />
      </div>
      <div className={css(mainStyle.banner)}>
        <h1 style={{ fontSize: "4em", fontWeight: "bolder", alignSelf: "start" }}>CEII Feed</h1>
        <h1 style={{ fontSize: "4em" }}>The best social media wannabe on the web</h1>
      </div>
    </div>
  );
};

//font-family: 'Montserrat', sans-serif;
const mainStyle = StyleSheet.create({
  content: {
    height: "80vh",
    minHeight: "80vh",
  },
  container: {
    fontFamily: ["Montserrat", "sans-serif"],
    display: "grid",
    gridTemplateColumns: "repeat(2, 50%)",
    backgroundColor: "white",
    height: "100%",
  },
  cover: {
    width: "90%",
    height: "90%",
  },
  banner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
