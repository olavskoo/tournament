import React, { useState } from "react";
// react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// Other
import texts from "./_resources/texts.json";
import "./App.css";
import "antd/dist/antd.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
// Screens
import Home from "./_screens/Home";
import Calendar from "./_screens/Calendar";
import Ranking from "./_screens/Ranking";
import Teams from "./_screens/Teams";
import Login from "./_screens/Login";
import SignUp from "./_screens/SignUp";
import Error from "./_screens/Error";
// Ant Design
import { Layout } from "antd";
const { Content } = Layout;
function App() {
  // Este State Maneja el idioma
  const [language, setLanguage] = useState("es");
  let isLive = true;
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home">
          <Layout style={{ height: "100%", backgroundColor: "#292d31" }}>
            <Header
              lang={language}
              setLanguage={setLanguage}
              texts={texts}
              isLive={isLive}
            />
            <Content style={{ height: "auto" }}>
              <Switch>
                <Route path="/home" exact>
                  <Home isLive={isLive} lang={language} />
                </Route>
                <Route path="/home/calendar">
                  <Calendar />
                </Route>
                <Route path="/home/ranking">
                  <Ranking />
                </Route>
                <Route path="/home/teams">
                  <Teams />
                </Route>
              </Switch>
            </Content>
            <Footer lang={language} texts={texts} />
          </Layout>
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/error" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
