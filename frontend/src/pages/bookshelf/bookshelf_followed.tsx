import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import "./style/bookshelf.css";
import Logo from "././Logo.png";
//component
import Topmenu from "../component/topmenu";
import Menubookshelf from "./component/menubookshelf";
const { Header,  Content } = Layout;


function Bookshelf_followed() {
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0px 0px",
            color: "white",
            height:"84px",
            backgroundColor: "white",
          }}
        >
          <Topmenu />
        </Header>
        <Content
          style={{ padding: "10px 10px 10px 10px", height: "100%" }}
          className="MainBackgroundColor"
        >
        <Layout className="MainBackgroundColor">
            <Header
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "18px 18px 0px 0px",
                padding: "0px 50px 0px 50px",
                backgroundColor: "#0C134F",
                color: "white",
                zIndex:"999"
              }}
            >
              <Menubookshelf/>
            </Header>
            <Content
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100  vh",
                padding: "10px 20px 10px 10px",
                backgroundColor: "1818",
                background: "#181818",
                borderRadius:"0px 0px 18px 18px"
              }} className="Content-Content.Part"
            >
             
              <div className="header">การ์ตูนที่ติดตาม</div>
              {/* info-box1 start */}
              <div className="info-box">
                <div className="img-infobox">
                  <img src={Logo} width={190} height={190} />
                </div>
                <div className="text-infobox">
                  <h1>Toonname1</h1>
                  <h2>writer:</h2>
                  <br></br>
                  <h3>Update:06/09/2023</h3>
                </div>
                <div className="EpisodeNumber-infobox">
                  <h1>#4</h1>
                </div>
              </div>
              {/* info-box1 End */}
               {/* info-box2 start */}
               <div className="info-box">
                <div className="img-infobox">
                  <img src={Logo} width={190} height={190} />
                </div>
                <div className="text-infobox">
                  <h1>Toonname1</h1>
                  <h2>writer:</h2>
                  <br></br>
                  <h3>Update:06/09/2023</h3>
                </div>
                <div className="EpisodeNumber-infobox">
                  <h1>#4</h1>
                </div>
              </div>
              {/* info-box2 End */}
              {/* info-box2 start */}
              <div className="info-box">
                <div className="img-infobox">
                  <img src={Logo} width={190} height={190} />
                </div>
                <div className="text-infobox">
                  <h1>Toonname1</h1>
                  <h2>writer:</h2>
                  <br></br>
                  <h3>Update:06/09/2023</h3>
                </div>
                <div className="EpisodeNumber-infobox">
                  <h1>#4</h1>
                </div>
              </div>
              {/* info-box2 End */}
            </Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
}
export default Bookshelf_followed;
