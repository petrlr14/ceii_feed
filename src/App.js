import React /*, { useState } */ from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { Layout } from "antd";
import { StyleSheet, css } from "aphrodite";
import { LandingPage, LandingHeader } from "./pages/landing";
import { RegisterPage } from "./pages/register";

const { Content, Header, Footer } = Layout;

export const App = () => {
  const { location } = useHistory();
  console.log(location.pathname === "/");
  // const [logged, setLog] = useState(false);
  return (
    <Layout className={css(style.layout)}>
      <Header>
        <Switch>
          <Route path="/" exact component={LandingHeader} />
          <Route
            render={(props) => {
              return (
                <h1>
                  <Link to="/" className={css(style.color)}>
                    CEII Feed
                  </Link>
                </h1>
              );
            }}
          />
        </Switch>
      </Header>
      <Content className={css(style.content)}>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={RegisterPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Content>
      <Footer>
        <a href="https://www.freepik.com/vectors/people">
          People vector created by freepik - www.freepik.com
        </a>
      </Footer>
    </Layout>
  );
};

const style = StyleSheet.create({
  layout: {
    minHeight: "100vh",
    maxHeight: "100vh",
  },
  content: {
    height: "80vh",
    minHeight: "80vh",
  },
  color: {
    color: "white",
  },
});
