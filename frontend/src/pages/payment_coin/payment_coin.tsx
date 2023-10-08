import React, { useState, useEffect, } from 'react';
import '../../index.css';
import './styles/header.css';
import './styles/content.css';
import './styles/header';

import Topmenu from '../component/topmenu';
import { Layout, theme, ConfigProvider, Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import '../component/topmenu';

import { UsersInterface } from '../../interfaces/IUser';
import { GetUsersByUsernameAPI } from "../../services/https";
import Cookies from 'js-cookie'; //npm install js-cookie

/* Confirmation  */
import Swal from 'sweetalert2';
/*End Confirmation */

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,


} from "react-router-dom";
import { count } from 'console';

const { Header } = Layout;

interface Product {
  id: number;
  price: string;
  coin: string;
}
const data: Product[] = [
  {
    id: 1,
    price: "THB 40",
    coin: "185"
  },
  {
    id: 2,
    price: "THB 100",
    coin: "470"
  },
  {
    id: 3,
    price: "THB 200",
    coin: "960"
  },
  {
    id: 4,
    price: "THB 350",
    coin: "1750"
  },
  {
    id: 5,
    price: "THB 1000",
    coin: "5100"
  },
  {
    id: 6,
    price: "THB 1200",
    coin: "6300"
  },

]


const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  userSelect: 'none',
  height: '84px',
  alignItems: 'center',
  borderBottom: '1px solid',
  borderBottomColor: '#0C134F',
}


function Buycoin() {

  const [products, setProducts] = useState<Product[]>(data);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../styles/header';
    script.async = true;
    GetUsersByUsername();
  }
  )
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [size, setSize] = useState<SizeType>('large');
  const handleClick = (p: Product) => {
    Swal.fire({
      title: 'คุณต้องการชำระเงิน?',
      text: `คุณต้องการจ่ายชำระจำนวน ${p.price}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'ชำระสำเร็จ!',
          `คุณได้รับ coin จำนวน ${p.coin}`,
          'success'
        )
      }
    })
  }

  const username = Cookies.get('username');
  const [coin, setCoin] = useState<number | null>(null); // Initialize coin state
  const GetUsersByUsername = async () => {

    let res = await GetUsersByUsernameAPI(username);
    if (res) {
      console.log(res)
      const userCoin = res.Coins;
      console.log(userCoin);
      setCoin(userCoin);
    }
  };



  return (


    <ConfigProvider
      theme={{
        components: {
          Layout: {
            colorBgHeader: "#0C134F",

          }
        },
        token: {
          "colorText": "#FFFFFF",
          "colorPrimary": "#5C469C",

        },
      }}>

      <Layout className="layout">

        <Header style={headerStyle}>
          <Topmenu />

        </Header>
        <div id="grad1">
          <div className='box3-4'>
            <div className="box3">
              <div className="group">
                <div className="overlap">
                  <div className="overlap-group">
                    <div className="text-wrapper">เหรียญของฉัน</div>
                    <div className="my-coin">
                      <div className="div-wrapper">
                        <div className="div">{coin}</div>
                      </div>
                    </div>
                  </div>
                  <img className="image" alt="Image" src={require("./pictures/image-4.png")} />
                </div>
              </div>
            </div>
            <div className="box4">
              <div className='box4-content'>
                {products.map((p) => (
                  <div onClick={() => handleClick(p)} className='box4-flex' >
                    <div className="box">
                      <div className="group">
                        <div className="overlap-group">
                          <div className="rectangle"><div className='box4-text'>{p.price}</div></div>
                          <div className="overlap">
                            <div className="text-wrapper">{p.coin}</div>
                            <img className="image" alt="Image" src={require("./pictures/image-4.png")} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='satoon-footer'>
              <img className='satoon-img2' src={require("./pictures/logo.png")} />
            </div>
          </div>
        </div>

      </Layout>

    </ConfigProvider>

  );
}

export default Buycoin;
