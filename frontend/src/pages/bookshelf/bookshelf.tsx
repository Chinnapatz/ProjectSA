import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";


//import Menubookshelf from "./component/menubookshelf";
const { Header, Footer, Sider, Content } = Layout;
function Bookshelf() {
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0px 0px",
            color: "white",
            backgroundColor: "white",
          }}
        >
      
        </Header>
      
        <Content style={{ padding:"10px 10px 10px 10px", height:"100vh"}}>
              <Layout>
                <Header style={{borderRadius:"15px 15px 0px 0px",
                                display: "flex",
                                padding:"0px",
                                margin:"",
                                justifyContent: "center",
                                backgroundColor: "white",
                                }}>
                  {/* <Menubookshelf/> */}
                </Header>
                <Content style={{
                  height:"98vh",
                  borderRadius:"red 10px"
                  
                }}>
                  
                </Content>
          
              </Layout>
        </Content>
      </Layout>
    </>
  );
}
export default Bookshelf;
