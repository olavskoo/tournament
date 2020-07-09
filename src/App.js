import React, { useState } from "react";
// react-router-dom
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
// Other
import texts from "./_resources/texts.json";
import "./App.css";
import "antd/dist/antd.css";
import Header from "./_components/NavBar";
import Footer from "./_components/Footer";
// Screens
import Home from "./_screens/Home";
import Calendar from "./_screens/Calendar";
import Ranking from "./_screens/Ranking";
import Teams from "./_screens/Teams";
import Login from './_screens/Login';
// Ant Design
import { Layout } from "antd";
const { Content } = Layout;

function App() {
  let { path } = useRouteMatch();
  // Este State Maneja el idioma
  const [language, setLanguage] = useState("es");
  let isLive = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout style={{ height: "100%", backgroundColor: "#292d31" }}>
            <Header
              lang={language}
              setLanguage={setLanguage}
              texts={texts}
              isLive={isLive}
            />
            <Content style={{ height: "auto" }}>
              <Switch>
                <Route exact path={path}>
                  <Home isLive={isLive} lang={language} />
                </Route>
                <Route path="/calendar">
                  <Calendar />
                </Route>
                <Route path="/ranking">
                  <Ranking />
                </Route>
                <Teams />
                <Route path="/teams"></Route>
              </Switch>
            </Content>
            <Footer lang={language} texts={texts} />
          </Layout>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
