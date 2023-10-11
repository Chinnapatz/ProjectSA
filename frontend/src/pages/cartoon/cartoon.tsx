import React,{useState} from "react";
import { Layout } from "antd";
import { Form, Link } from "react-router-dom";
import Topmenu from "../component/topmenu";
import './style/style.css'
import LikeButton from './LikeButton';
import {SeriesInterface} from "../../interfaces/ISeries";
import { GetCartoon } from "../../services/https";

//import Menubookshelf from "./component/menubookshelf";
const { Header, Footer, Sider, Content } = Layout;
function Cartoon() {
    // const {cartoons,setCartoon} = useState <SeriesInterface[]>([]);
    // const [form]=Form.useForm();
    // const getToonName=async () => {
    //     let res = await GetCartoon(Number(id));
    //     if (res){
    //         setCartoon(res);
    //         form.setFieldValue({
            
    //         })
    //     }
    // };
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

                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="listbox">

                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="listbox">

                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="listbox">

                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="listbox">

                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="listbox">

                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="listbox">

                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="listbox">

                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="listbox">

                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="listbox">

                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="listbox">

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
