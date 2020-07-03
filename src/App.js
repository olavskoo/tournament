import React, { useState } from "react";
// Other
import texts from "./_resources/texts.json";
import "./App.css";
import "antd/dist/antd.css";
import Header from "./_components/NavBar";
import Footer from "./_components/Footer";
// Ant Design
import { Layout } from "antd";
const { Content } = Layout;

function App() {
  const [language, setLanguage] = useState("es");
  return (
    <Layout style={{ height: "100%", backgroundColor: "#292d31" }}>
      <Header lang={language} setLanguage={setLanguage} texts={texts} />
      <Content></Content>
      <Footer />
    </Layout>
  );
}

export default App;
