import React, { useState } from "react";
// react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
// Ant Design
import { Layout } from "antd";
const { Content } = Layout;

function App() {
  // Este State Maneja el idioma
  const [language, setLanguage] = useState("es");
  return (
    <Router>
      <Layout style={{ height: "100%", backgroundColor: "#292d31" }}>
        <Header lang={language} setLanguage={setLanguage} texts={texts} />
        <Content style={{ height: "auto" }}>
          <Switch>
            <Route exact path="/">
              <Home />
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
    </Router>
  );
}

export default App;
