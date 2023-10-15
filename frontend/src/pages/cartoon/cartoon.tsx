import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Layout } from "antd";
import Swal from "sweetalert2";
//css
import "./style/style.css";
import './style/followButton.css';
//ไม่ใช้

//component
import Topmenu from "../component/topmenu";
import './style/style.css'
import LikeButton from './LikeButton';


import { useNavigate } from "react-router-dom";
//import Menubookshelf from "./component/menubookshelf";
//https request
import {
  GetCartoonByID_API,
  GetEpisodesByID_API,
  GetUsersByUsernameAPI,
  getPayment,
  UpdatePaymentEp,
} from "../../services/https";
import { CreateFollow } from "../../services/https/Bookshelf/bookshelf_follow";
//interface
import { UsersInterface } from "../../interfaces/IUser";
import { FollowInterface } from "../../interfaces/IFollow";


const { Header, Content } = Layout;

interface Toon {
    ID: number;
    Epnumber: number;
    Thumbnail: string;
    Title: string;
    Price: string;
    Datetime: string;
}

function Cartoon() {
  const [title, setTitle] = useState<any | null>(null);
  const [products, setProducts] = useState<Toon[]>([]);
  const [member, setMember] = useState<UsersInterface | undefined>(undefined);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '../styles/header';
        script.async = true;
        GetCartoonByID();
        GetEpisodesByID(id);
        GetUsersByUsername();


    }, []);
    useEffect(() => {
    }, [title]);
    const id = Cookies.get('ID');
    // console.log(id)

    const navigate = useNavigate();
    

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


        }
    };

  const username = Cookies.get("username");
  const GetUsersByUsername = async () => {
    let res = await GetUsersByUsernameAPI(username);
    if (res) {
      console.log(res);
      setMember(res);
    }
  };

  const [isBoughtMap, setIsBoughtMap] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    products.forEach((p) => {
      if (!isBoughtMap.hasOwnProperty(p.ID)) {
        // เพิ่ม ID_E ใหม่เข้าไปเฉพาะถ้ายังไม่มีใน isBoughtMap
        setIsBoughtMap((prevIsBoughtMap) => {
          return {
            ...prevIsBoughtMap,
            [p.ID]: false, // สามารถกำหนดค่าเริ่มต้นตามต้องการ
          };
        });
        checkBought(p.ID, member?.ID);
      }
    });
  }, [products, isBoughtMap, member?.ID]);
  //status
  const checkBought = async (
    ID_E: number | undefined,
    member_ID: Number | undefined
  ): Promise<React.ReactNode> => {
    let res = await getPayment(ID_E, member_ID);
    setIsBoughtMap((prevIsBoughtMap) => {
      const updatedIsBoughtMap = { ...prevIsBoughtMap };
      if (ID_E !== undefined) {
        updatedIsBoughtMap[ID_E] = res.status;
      } else {
        console.warn("ID_E is undefined. Skipping update.");
      }
      return updatedIsBoughtMap;
    });
    return null;
  };

  //buyep
  const handleClick = (p: Toon) => {
    Swal.fire({
      title: "คุณต้องการชำระเหรียญ?",
      text: `คุณต้องการจ่ายชำระเหรียญจำนวน  ${p.Price} Coin`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(member?.ID);
        console.log(p.ID);
        UpdatePaymentEp(p.ID, member?.ID);

        Swal.fire("ชำระสำเร็จ!", `คุณได้รับ coin จำนวน ${p.Price}`, "success");

        setTimeout(() => window.location.reload(), 800);
      }
    });
  };
  //Part.followButton
  const [follow, setFollow] = useState(false);
  const [cartoon,setCartoon] =useState<Toon>();
  const [isFollow, setIsFollow] = useState<FollowInterface[]>([]);
  const handleFollowButtonClick = () => {
    setFollow(!follow);  
    console.log(member?.ID);  
    console.log(cartoon?.ID);  
    CreateFollow(member?.ID,cartoon?.ID);
  };
  console.log(member);
  console.log(products);


      const onClick = (ID: Number | undefined) => {
        const idEpValues = `${ID}`;
        Cookies.set("ID_ep", idEpValues, { expires: 7 }); //setCookie(name, value, {วันหมดอายุ})
        const id = Cookies.get("ID_ep");
        console.log(id);
        navigate('/Home/cartoon/episodes');
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
            height: "84px",
          }}
        >
          <Topmenu />
        </Header>
        <Content
          style={{ padding: "10px 10px 10px 10px", height: "100%" }}
          className="dashboardbackgroud"
        >
          <div className="dashboardbackgroud">
            <div className="all">
              <div className="top">
                <div className="imageshowInCartoon">
                  <img
                    className="imageshowimage"
                    src={title}
                    alt="search--v1"
                  />
                </div>
              </div>
              <div className="below">
                <div className="infobox">
                  <div className="info">
                    <h1 className="toonname">toonname</h1>
                    <br></br>

                    <div className="detailinfo">
                      <br></br>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt, maiores qui. Explicabo magni maiores officia
                        non dolorum dolore harum cum inventore quibusdam?
                        Laborum nobis fugit ullam voluptatibus repellendus
                        dolores recusandae, dolore culpa corrupti veritatis
                        consectetur et enim itaque porro perferendis ipsum
                        placeat magnam maiores ab.
                      </p>
                    </div>
                    <div className="showlike"></div>
                    <div className="blankspace"></div>

                    {/* Button_Follow-Start */}
                    <div>
                      {/* Apply the "liked" class when the button is liked */}
                      <div
                        onClick={handleFollowButtonClick}
                        className={follow ? "Followed" : "Follow"}
                      >
                        {follow ? "✔️  Followed" : "➕ Follow"}
                      </div>
                    </div>
                    {/* Button_Follow-End */}

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

                                            <div className="list" key={p.ID}>

                                                <div className="listbox">

                                                    <div className="imgEP">
                                                        <img className="imgForEP" src={p.Thumbnail} />
                                                    </div>
                                                    <div className="EPinfoCartoon">

                                                        <div className="EPNumber">
                                                            <p className="NumberEPInCartoon">EP.{p.Epnumber}</p>
                                                        </div>
                                                        <div className="blankSpaceInEPCartoon1"></div>
                                                        <div className="toonnameAndDate">
                                                            <p className="toonnameInCatoon">{p.Title}</p>
                                                            <p className="DateInCartoon"> {p.Datetime}</p>
                                                        </div>
                                                        <div className="blankSpaceInEPCartoon2"></div>

                                                        <div className="priceInCartoon" >
                                                            {isBoughtMap[p.ID] ? (
                                                                <div>
                                                                    <div style={{color:'white'}} onClick={() => onClick(p.ID)}>สินค้าถูกซื้อแล้ว!</div>
                                                                </div>
                                                            ) : (
                                                                <div className="boxforprice" onClick={() => handleClick(p)}>
                                                                    <div className="boxprice">
                                                                        <p className="EPPrice">{p.Price} 🪙</p>
                                                                    </div>
                                                                    <div className="blankpriceForBackIn"></div>
                                                                </div>
                                                            )}


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
