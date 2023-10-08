import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import Topmenu from "../component/topmenu";
import './style/style.css'
//import Menubookshelf from "./component/menubookshelf";
const { Header, Footer, Sider, Content } = Layout;
function Cartoon() {
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

                                        <div className="likeicontop">
                                            <p className="sumlike">2.3M</p>
                                        </div>
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
