import React, { useState, useEffect } from 'react'
import { Layout } from "antd";
import { Link } from "react-router-dom";
import Topmenu from "../component/topmenu";
import './style/style.css'
import LikeButton from './LikeButton';
import Cookies from 'js-cookie';
import { GetCartoonByID_API, GetEpisodesByID_API } from '../../services/https';
//import Menubookshelf from "./component/menubookshelf";
const { Header, Content } = Layout;


interface Toon {
    ID:               number;
    Square_Thumbnail: string;
    Title:            string;
    Price:            string;
    Datetime:         string;
  }














function Cartoon() {

    const [title, setTitle] = useState<any|null>(null);



    useEffect(() => {
        const script = document.createElement('script');
        script.src = '../styles/header';
        script.async = true;
        GetCartoonByID();
        GetEpisodesByID();
        
          
      
        
    }, []);

   


    useEffect(() => {
        
    }, [title]);


    const id = Cookies.get('ID');
    console.log(id)
    
    const GetCartoonByID = async () => {
        let res = await GetCartoonByID_API(id);
        if (res) {
            console.log(res)
            // setCartoons(res);
            const titles = res.Vertical_Thumbnail
            setTitle(titles)
            //console.log(titles)
           
        }
    };

    const GetEpisodesByID = async () => {
        let res = await GetEpisodesByID_API(id);
        if (res) {
            console.log(res)
            // setCartoons(res);
            // const titles = res.Vertical_Thumbnail
            // setTitle(titles)
            //console.log(titles)
           
        }
    };



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
                        height: "84px"
                    }}
                >
                    <Topmenu />
                </Header>
                <Content style={{ padding: "10px 10px 10px 10px", height: "100%" }} className="dashboardbackgroud">
                    <div className="dashboardbackgroud">
                        <div className="all">
                            <div className="top">
                            <img className="imageshowimage" src={title} alt="search--v1" />
                            </div>
                            <div className="below">

                                <div className="infobox">
                                    <div className="info">
                                        <h1 className="toonname">toonname</h1>
                                        <br>
                                        </br>
                                        <span className="by"> By </span>
                                        <span className="creator"> Creatorname </span>

                                        <div className="detailinfo">
                                            <br></br>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, maiores qui. Explicabo magni maiores officia non dolorum dolore harum cum inventore quibusdam? Laborum nobis fugit ullam voluptatibus repellendus dolores recusandae, dolore culpa corrupti veritatis consectetur et enim itaque porro perferendis ipsum placeat magnam maiores ab.</p>
                                        </div>
                                        <div className="showlike"></div>
                                        <div className="blankspace"></div>
                                        
                                        <LikeButton></LikeButton>
                                        {/* <button className="likeicontop">
                                            <p className="sumlike">2.3M</p>
                                        </button> */}
                                        
                                    </div>
                                </div>

                                <div className="eplist">
                                    <div className="blankspaceep"></div>
                                    <div className="listzone">
                                        <div className="list">
                                            <div className="listbox">
                                            <div className="listshowdashboad">
                        <div className="coverpage1">
                        {/* <img className="coverpage1" src={t.Square_Thumbnail} alt="search--v1" /> */}
                        </div>



                        
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">title</h2>
                          <h1 className="EP1">EP.1</h1>
                        </div>
                        
                      </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </>
    );
}
export default Cartoon;
