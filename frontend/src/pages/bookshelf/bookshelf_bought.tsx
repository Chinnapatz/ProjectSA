import React,{ useEffect, useState } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import "./style/bookshelf.css";
import Cookies from 'js-cookie'; 
//component
import Topmenu from "../component/topmenu";
import Menubookshelf from "./component/menubookshelf";
import { UsersInterface } from "../../interfaces/IUser";
import { GetUsersByUsernameAPI } from "../../services/https";
const { Header,  Content } = Layout;

interface cartoon {
  ID:               number;
  Square_Thumbnail: string;
  Title:            string;
  Datetime:         string;
}
function Bookshelf_bought() {
  const [member, setMember] = useState<UsersInterface | undefined>(undefined);
  const [products, setProducts] = useState<cartoon[]>([]);
  const username = Cookies.get('username');
  const GetUsersByUsername = async () => {
    let res = await GetUsersByUsernameAPI(username);
    if (res) {
      setMember(res);
    }
  };
  // const getCartoonPaymentEpisodesByID = async (ID: Number | undefined) => {
  //   let res = await GetCartoonPaymentEpisodesByID(ID);
  //   if (res) {
  //     console.log(res);
  //     setProducts(res);
  //   }
  // };
  useEffect(()=>{
    GetUsersByUsername();
  },[]);
  // useEffect(() => {
  //   if (member?.ID) {
  //     getCartoonPaymentEpisodesByID(member.ID);
  //   }
  // }, [member]);
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
             
              <div className="header">การ์ตูนที่ซื้อแล้ว</div>
              {/* info-box1 start */}
              {products.map((cartoon)=>(
                <div className="info-box">
                  <div className="img-infobox">
                    <img  src={cartoon.Square_Thumbnail} width={190} height={190} />
                  </div>
                  <div className="text-infobox">
                    <h1>{cartoon.Title}</h1>
                    <br></br>
                    <h3>Update:06/09/2023</h3>
                  </div>
                  <div className="EpisodeNumber-infobox">
                    <h1></h1>
                  </div>
                </div>
              ))}
              {/* info-box1 End */}
            </Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
}
export default Bookshelf_bought;
