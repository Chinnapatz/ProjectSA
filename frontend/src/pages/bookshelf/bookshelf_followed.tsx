import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import "./style/bookshelf.css";
import Cookies from "js-cookie";
//component
import Topmenu from "../component/topmenu";
import Menubookshelf from "./component/menubookshelf";
import { UsersInterface } from "../../interfaces/IUser";
import { SeriesInterface } from "../../interfaces/ISeries";
import { GetCartoonByID } from "../../services/https/Bookshelf/bookshelf_follow";
import {
  GetUsersByUsernameAPI,
  GetInfoMemberByMemberID,
} from "../../services/https";
const { Header, Content } = Layout;
interface Cartoon {
  ID: number;
  Square_Thumbnail: string;
  Title: string;
  Datetime: string;
}

function Bookshelf_followed() {
  const [member, setMember] = useState<UsersInterface | undefined>(undefined);
  const [datafollowmember, setDataFollowMember] = useState<UsersInterface | undefined>(undefined);
  const [cartoon, setCartoon] = useState<Cartoon[]>([]);
  const username = Cookies.get("username");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../styles/header";
    script.async = true;
    getUsersByUsername();
    getInfoDataMemberByMemberID(member?.ID);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let followedCartoons: Cartoon[] = [];
      if (datafollowmember?.FollowedCartoon) {
        if (Array.isArray(datafollowmember.FollowedCartoon)) {
          followedCartoons = datafollowmember.FollowedCartoon as Cartoon[];
        } else {
          followedCartoons = [datafollowmember.FollowedCartoon as Cartoon];
        }
      }

      if (followedCartoons.length > 0) {
        const validCartoons: Cartoon[] = followedCartoons.filter(
          (cartoon) => !!cartoon.ID
        );
        if (validCartoons.length > 0) {
          const cartoonIDs: number[] = validCartoons
            .filter((cartoon) => typeof cartoon.ID === "number")
            .map((cartoon) => cartoon.ID as number); // Corrected type here
            getCartoonIDfromMemberID(cartoonIDs);
            console.log("Cartoon data: ", cartoon);
          
        }
      }
    };

    fetchData();
  }, [datafollowmember]);
  
 

  const getUsersByUsername = async () => {
    let res = await GetUsersByUsernameAPI(username);
    if (res) {
      setMember(res);
      console.log(res);
    }
  };

  const getInfoDataMemberByMemberID = async (ID: Number | undefined) => {
    let res = await GetInfoMemberByMemberID(ID);
    if (res) {
      setDataFollowMember(res);
      console.log("Data Member:", res);
    }
  };

  const getCartoonIDfromMemberID = async (ID: number[] | undefined) => {
    if (ID && ID.length > 0) {
      const cartoons: Cartoon[] = [];
      for (const id of ID) {
        const cartoon = await GetCartoonByID(id);
        if (cartoon) {
          cartoons.push(cartoon);
        }
      }
      setCartoon(cartoons);
      console.log("Cartoon data: ", cartoons);
      console.log("Cartoon data: ", cartoon);
     
    }
  };
  console.log("Cartoon data: ", cartoon);
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0px 0px",
            color: "white",
            height: "84px",
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
                zIndex: "999",
              }}
            >
              <Menubookshelf />
            </Header>
            <Content
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100  vh",
                padding: "10px 20px 10px 10px",
                backgroundColor: "1818",
                background: "#181818",
                borderRadius: "0px 0px 18px 18px",
              }}
              className="Content-Content.Part"
            >
              <div className="header">การ์ตูนที่ติดตาม</div>
              {/* info-box1 start */}
              {cartoon.map((cartoon) => (
                <div key={String(cartoon.ID)} className="info-box">
                  <div className="img-infobox">
                    <img
                      src={cartoon.Square_Thumbnail}
                      width={190}
                      height={190}
                      alt="Cartoon Thumbnail"
                    />
                  </div>
                  <div className="text-infobox">
                    <h1>{cartoon.Title}</h1>
                    <br></br>
                    <h3>Update: {cartoon.Datetime}</h3>
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
export default Bookshelf_followed;
