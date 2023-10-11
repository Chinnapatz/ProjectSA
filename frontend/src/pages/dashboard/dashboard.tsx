import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import Topmenu from "../component/topmenu";
import './style/style.css'
//import Menubookshelf from "./component/menubookshelf";
const { Header, Footer, Sider, Content } = Layout;
function Dashboard() {
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





            <div className="alltop">
              <div className="dashboardmain">
                <div className="imageshow">
                  <img className="imageshowimage" src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715240750940365/44.jpg?ex=65199dd6&is=65184c56&hm=59d69cb33684bc9ceadb11b702dde439a565eb6edd515c414aaf91518dd05df1&" alt="search--v1" />
                  {/* <Image
          width={1080}
          max-heigh={480}
          
          preview={{ visible: false,mask: false }}
          
          src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715240750940365/44.jpg?ex=65199dd6&is=65184c56&hm=59d69cb33684bc9ceadb11b702dde439a565eb6edd515c414aaf91518dd05df1&"
        /> */}

                </div>
                <div className="infotop">
                  <div className="infotopbox">
                    <div className="info">
                      <h1 className="toonname">toonname</h1>
                      <br>
                      </br>
                      <div className="detailinfodash">
                        
                        <p className="infodashdt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, maiores qui. Explicabo magni maiores officia non dolorum dolore harum cum inventore quibusdam? Laborum nobis fugit ullam voluptatibus repellendus dolores recusandae, dolore culpa corrupti veritatis consectetur et enim itaque porro perferendis ipsum placeat magnam maiores ab.</p>
                      </div>
                      {/* <div className="showlike">
                        <div className="blankspace"></div>

                        <div className="likeicontop">
                          <p className="sumlike">2.3M</p>
                          <Image
                            width={22}
                            max-heigh={22}

                            preview={{ visible: false, mask: false }}

                            src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241048752249/like.png?ex=65199dd6&is=65184c56&hm=4a28c3134ae9a37add3161f84a36fcbddae59600f511656fa5cba9fe76ceda90&"
                          />
                        </div>

                      </div> */}


                    </div>

                  </div>
                </div>
              </div>
            </div>


            {/* <!-- continue read --> */}

            <div className="continueread">
              <div className="boxcontinueread">
                <div className="continuereadhead">
                  <h2 className="headcontinue">Continue read</h2>

                </div>
                <div className="remforslidebar">
                  <div className="listcartooncontinueread">

                    <div className="listboxcn">
                      <div className="onelist">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.1</h1>

                        </div>
                      </div>
                    </div>


                    <div className="listboxcn">
                      <div className="onelist">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.2</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcn">
                      <div className="onelist">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.3</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcn">
                      <div className="onelist">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.4</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcn">
                      <div className="onelist">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.5</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcn">
                      <div className="onelist">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.6</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcn">
                      <div className="onelist">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>



            {/* <!-- rating --> */}
            <div className="ratingshowmain">
              <div className="boxratingshowmain">
                <div className="ratinghead">
                  <span className="headrating">Top 3 </span>
                  <span className="headrating2"> weekly✨</span>
                </div>
                <div className="row">
                  <div className="cartoon">

                    <div className="ratingbox">
                      <div className="ratingtoptoon1">
                        <div className="coverpagetoprating">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoontop">

                          <h1 className="rank1">#1🥇</h1>
                          <h2 className="toptoonname">toonname</h2>


                        </div>
                      </div>
                    </div>

                    <div className="ratingbox">
                      <div className="ratingtoptoon2">
                        <div className="coverpagetoprating">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoontop">

                          <h1 className="rank2">#2🥈</h1>
                          <h2 className="toptoonname">toonname</h2>


                        </div>
                      </div>
                    </div>

                    <div className="ratingbox">
                      <div className="ratingtoptoon3">
                        <div className="coverpagetoprating">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoontop">

                          <h1 className="rank3">#3🥉</h1>
                          <h2 className="toptoonname">toonname</h2>


                        </div>
                      </div>
                    </div>










                  </div>
                </div>
              </div>
            </div>




            {/* <!-- showdashboard --> */}

            <div className="cartoonlistshowdashboad">
              <div className="boxcartoonlistshowdashboad">

                <div className="cartoonlistshowdashboadhead">
                  <h1 className="headcartoonlistshowdashboad">Cartoon</h1>
                </div>

                <div className="remforslidebarcartoonlistshowdashboad">
                  <div className="listcartoonlistshowdashboad">

                    <div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.1</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.2</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.3</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.4</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.5</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.6</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div>

                    <div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                                width={180}
                                max-heigh={180}

                                preview={{ visible: false, mask: false }}

                                src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                              /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                                width={180}
                                max-heigh={180}

                                preview={{ visible: false, mask: false }}

                                src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                              /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}

                  preview={{ visible: false,mask: false }}

                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

                        </div>
                      </div>
                    </div><div className="listboxcartoonlistshowdashboad">
                      <div className="listshowdashboad">
                        <div className="coverpage1">
                          {/* <Image
                  width={180}
                  max-heigh={180}
                  preview={{ visible: false,mask: false }}
                  src="https://cdn.discordapp.com/attachments/1031454676241108993/1157715241325568011/luv.jpg?ex=65199dd6&is=65184c56&hm=b92b308784fe27d83e34b2bdb03049bbe84f7ef15d1371d875c2111f96beeb44&"
                /> */}
                        </div>
                        <div className="infotoonlist1">
                          <h2 className="toonnamelist1">toonname</h2>
                          <h1 className="EP1">EP.7</h1>

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
export default Dashboard;
