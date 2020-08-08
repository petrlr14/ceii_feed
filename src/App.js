import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { Layout, notification } from "antd";
import { LandingPage } from "./pages/landing";
import { RegisterPage } from "./pages/register";
import { Feed } from "./pages/feed";
import { LandingHeader, AuthHeader, FeedHeader } from "./components/headers/headers";
import { loadUser } from "./services/user";
import { Profile } from "./pages/profile";

const { Content, Header, Footer } = Layout;

export const App = () => {
  const { location } = useHistory();
  const [user, setUser] = useState({});
  const [loadUserCb, setLoadUserCb] = useState(0);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await loadUser();
        setUser(data);
      } catch (e) {
        notification.error({ message: e });
      }
    };
    switch (location.pathname) {
      case "/":
      case "/login":
      case "/signup":
        break;
      default: {
        fetchUser();
      }
    }
    console.log("aver");
  }, [location.pathname, loadUserCb]);
  return (
    <Layout className="layout">
      <Header>
        <Switch>
          <Route path="/" exact component={LandingHeader} />
          <Route path="/login" exact component={AuthHeader} />
          <Route path="/signup" exact component={AuthHeader} />
          <Route
            component={(props) => {
              return <FeedHeader user={user} />;
            }}
          />
        </Switch>
      </Header>
      <Content>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={RegisterPage} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={Feed} />
          <Route path="/profile/:id?" exact component={() => <Profile user={user} />} />
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
