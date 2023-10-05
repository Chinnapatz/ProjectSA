import React, { useState, useEffect } from 'react';
import Topmenu from '../component/topmenu';
import { Layout, theme, ConfigProvider, Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import './styles/publish.css';

interface Toon {
  id: number;
  thumbnail: string;
  toonname: string;
  date:string;
}
const data: Toon[] = [
  {
    id: 1,
    thumbnail:'./pictures/p1.png',
    toonname: "Toonname1",
    date:"date dd-mm-yyyy"
  },
  {
    id: 2,
    thumbnail:'./pictures/p2.png',
    toonname: "Toonname2",
    date:"date dd-mm-yyyy"
  },
  {
    id: 3,
    thumbnail:'./pictures/p3.jpg',
    toonname: "Toonname3",
    date:"date dd-mm-yyyy"
  },
  {
    id: 1,
    thumbnail:'./pictures/p1.png',
    toonname: "Toonname1",
    date:"date dd-mm-yyyy"
  },
  {
    id: 2,
    thumbnail:'./pictures/p2.png',
    toonname: "Toonname2",
    date:"date dd-mm-yyyy"
  },
  {
    id: 3,
    thumbnail:'./pictures/p3.jpg',
    toonname: "Toonname3",
    date:"date dd-mm-yyyy"
  },
  
]

function Publish() {
  const [size, setSize] = useState<SizeType>('large');
  const [products, setProducts] = useState<Toon[]>(data);

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
      <div>
        <Topmenu />
        <div className='Publish'>
          <div className='Publish-flex-on-top'>
            <div className='Publish-text-on-top'>
              Choose Series
            </div>
            <div>
              <Button type="primary" style={{backgroundColor:'#997FE1'}} shape="round" size={size}>
                + Create Series
              </Button>
            </div>
          </div>
          <div className='Publish-flex-content'>
          {products.map((t) => (
            <div className='Publish-series'>
              
                
                <div className='Publish-set1'>
                  <img className='Publish-series-thumbnail-png' src={require (`${t.thumbnail}`)} alt={`Thumbnail for ${t.toonname}`}  />

                  <div className='Publish-text'>
                    <div className='Publish-text-name'>
                      {t.toonname}
                    </div>
                    <div className='Publish-text-date'>
                      {t.date}
                    </div>
                  </div>

                </div>
                <div className='Publish-button'>
                    <Button style={{ backgroundColor: '#997FE1' }} type="primary" shape="round" size={size}>
                      + Create Episodes
                    </Button>
                  </div>

              
            </div>
             ))}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
export default Publish;