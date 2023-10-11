import React, { useState, useEffect } from 'react'
import { Layout } from "antd";

import Topmenu from "../component/topmenu";
import './style/style.css'
import LikeButton from './LikeButton';
import Cookies from 'js-cookie';
import { GetCartoonByID_API, GetEpisodesByID_API } from '../../services/https';
//import Menubookshelf from "./component/menubookshelf";
const { Header, Content } = Layout;


interface Toon {
    ID: number;
    Thumbnail: string;
    Title: string;
    Price: string;
    Datetime: string;
}














function Cartoon() {

    const [title, setTitle] = useState<any | null>(null);
    const [products, setProducts] = useState<Toon[]>([]);


    useEffect(() => {
        const script = document.createElement('script');
        script.src = '../styles/header';
        script.async = true;
        GetCartoonByID();
        GetEpisodesByID(id);




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

    const GetEpisodesByID = async (ID: string | undefined) => {
        let res = await GetEpisodesByID_API(ID);
        if (res) {
            console.log(res)
            setProducts(res);
            // const titles = res.Vertical_Thumbnail
            // setTitle(titles)
            //console.log(titles)

        }
    };
    //// true = 1 fuction
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };
    // false 1 function
    const UpdateLike = async () => {
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
                            <div className="imageshowInCartoon">
                                    <img className="imageshowimage" src={title} alt="search--v1" />
                                </div>
                            </div>
                            <div className="below">

                                <div className="infobox">
                                    <div className="info">
                                        <h1 className="toonname" >toonname</h1>
                                        <br>
                                        </br>

                                        <div className="detailinfo">
                                            <br></br>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, maiores qui. Explicabo magni maiores officia non dolorum dolore harum cum inventore quibusdam? Laborum nobis fugit ullam voluptatibus repellendus dolores recusandae, dolore culpa corrupti veritatis consectetur et enim itaque porro perferendis ipsum placeat magnam maiores ab.</p>
                                        </div>
                                        <div className="showlike"></div>
                                        <div className="blankspace"></div>

                                        <LikeButton />


                                        {/* <button className="likeicontop">
                                            <p className="sumlike">2.3M</p>
                                        </button> */}

                                    </div>
                                </div>

                                <div className="eplist">
                                    <div className="blankspaceep"></div>
                                    <div className="listzone">
                                    {products.map((p) => (
                                        <div className="list">
                                        
                                            <div className="listbox">
                                            
                                                <div className="imgEP">
                                                    <img className="imgForEP" src={p.Thumbnail} />
                                                </div>
                                                <div className="EPinfoCartoon">

                                                    <div className="EPNumber">
                                                        <p className="NumberEPInCartoon">EP.{p.ID}</p>
                                                    </div>
                                                    <div className="blankSpaceInEPCartoon1"></div>
                                                    <div className="toonnameAndDate">
                                                        <p className="toonnameInCatoon">{p.Title}</p>
                                                        <p className="DateInCartoon"> {p.Datetime}</p>
                                                    </div>
                                                    <div className="blankSpaceInEPCartoon2"></div>
                                                    <div className="priceInCartoon">
                                                        <div className="boxforprice">
                                                            <div className="boxprice">
                                                                <p className="EPPrice">{p.Price} 🪙</p>

                                                            </div>
                                                            <div className="blankpriceForBackIn"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </div>


                                        
                                        </div>
                                    ))}
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
