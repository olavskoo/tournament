import React from "react";
import "./Home.css";
import { Row, Col } from "antd";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
// Others
import Team1 from "../_img/team1.png";
import Team2 from "../_img/team2.png";
const Event = () => {
  return (
    <div className="event-container">
      <p className="timeStamp">8:00 AM</p>
      <div className="teams-container" style={{ paddingBottom: 0 }}>
        <img src={Team1} alt="team-logo" className="teamImage" />
        <p className="teamName">HLG</p>
      </div>
      <div className="teams-container">
        <img src={Team2} alt="team-logo" className="teamImage" />
        <p className="teamName">III</p>
      </div>
    </div>
  );
};
const Schedule = () => {
  return (
    <Col span={3} style={{ maxHeight: "100%", overflow: "auto" }}>
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </Col>
  );
};
const Stream = () => {
  return (
    <Row style={{ height: "100%" }}>
      <ReactTwitchEmbedVideo
        channel="lpl"
        width={"100%"}
        height={"100%"}
        theme="dark"
      />
    </Row>
  );
};
const Home = () => {
  let isStreaming = true;
  let isSchedule = true;
  return (
    <Row style={{ height: "100%" }}>
      {isSchedule ? <Schedule /> : null}
      <Col style={{ flexGrow: 1 }}>
        {isStreaming ? <Stream /> : null}
        <Row></Row>
      </Col>
    </Row>
  );
};
export default Home;
