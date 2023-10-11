import React, { useState, useEffect } from 'react'
import Topmenu from '../component/topmenu'
import { Layout } from 'antd'
import { Steps } from 'antd'
import { ConfigProvider } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import './style/publish_se.css'
import { Button, Form, Input, Select } from 'antd';
import { useNavigate } from "react-router-dom";
import { GetUsersByUsernameAPI,CreateSeries, GetCategories } from '../../services/https'
import { SeriesInterface } from '../../interfaces/ISeries'

import Cookies from 'js-cookie';
import { UsersInterface } from '../../interfaces/IUser'


const getBase64 = (file1: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file1);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const getBase641 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const { TextArea } = Input;
const { Header, Content, Sider } = Layout;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  userSelect: 'none',
  height: '84px',
  alignItems: 'center',
  borderBottom: '1px solid',
  borderBottomColor: '#0C134F',
  padding: '0px',
}



const onChange = (value: string) => {
  console.log(`selected ${value}`);
};
const onSearch = (value: string) => {
  console.log('search:', value);
};
// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

interface Categories {
  ID: number;
  Type: string;
}



function Publish_Se() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../styles/header';
    script.async = true;
    Get_Categories();
    GetUsersByUsername()

  }, []);
  

  const [Categories, setCategories] = useState<Categories[]>([]);


  const Get_Categories = async () => {

    let res = await GetCategories();
    console.log(res)
    if (res) {
      console.log(res)
      setCategories(res)
    }
  };






  const [current, setCurrent] = useState(0);
  // const onChange = (value: number) => {
  //   

  //   setCurrent(value);
  // };

  
  const navigate = useNavigate();
  // Square button
  const [fileList1, setFileList1] = useState<UploadFile[]>([]);
  const handlePreview1 = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase641(file.originFileObj as RcFile);
    }
  };
  const handleChange1: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList1(newFileList);
  const uploadButton1 = (
    <div>
      <PlusOutlined className='text-btn-upload-square' />
      <div className='text-btn-upload-square' style={{ marginTop: 10 }}>select an image to upload</div>
    </div>
  );
  // Vertical button
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
  };
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined className='text-btn-upload-square' />
      <div className='text-btn-upload-square' style={{ marginTop: 10 }}>select an image to upload</div>
    </div>
  );





  const [member, setMember] = useState<UsersInterface | undefined>(undefined);
  const username = Cookies.get('username');
  
  const GetUsersByUsername = async () => {
    let res = await GetUsersByUsernameAPI(username);
    if (res) {
      console.log(res)
      setMember(res);
      
    }
  };







  const [form] = Form.useForm();
  const [messageApi] = message.useMessage();
  const onFinish = async (values: SeriesInterface) => {
    const updatedValues = {
      ...values,
      vertical_thumbnail: values.vertical_thumbnail.file.thumbUrl,
      square_thumbnail: values.square_thumbnail.file.thumbUrl,
    };
    let res = await CreateSeries(member?.ID,updatedValues);
    console.log(res)
    if (res.status) {
      messageApi.open({
        type: "success",
        content: <span style={{ color: 'green' }}>
          บันทึกข้อมูลสำเร็จ
        </span>,
      });
      setTimeout(function () {
        navigate('/Publish')
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: <span style={{ color: 'red' }}>
          บันทึกข้อมูลไม่สำเร็จ
        </span>,
      });
    }
  };




  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '5C469C',

          },
          components: {
            Upload: {
              actionsColor: 'black',
              colorBorder: 'white',
              colorPrimary: 'black',
              controlHeightLG: 90,
            },
            Form: {
              labelColor: 'white',
              labelFontSize: 24,

            }
          },
        }}
      >
        <Layout >
          <Header style={headerStyle}>  <Topmenu /></Header>
          <Content
            style={{ padding: '0px 0px 0px 0px', height: '100%' }} >
            <Layout style={{ padding: '0px 0px 0px 0px', height: '100%' }} >
              <Header style={{ backgroundColor: 'transparent' }}>
                <Steps
                  type="navigation"
                  current={current}                
                  className="site-navigation-steps"
                  items={[
                    {
                      status: current === 0 ? 'process' : 'finish', // เปลี่ยน status เป็น 'process' หรือ 'finish' ตามที่ถูกคลิก
                      title: 'Series',
                    },
                    {
                      status: current === 1 ? 'process' : current > 1 ? 'finish' : 'wait', // เปลี่ยน status เป็น 'process', 'finish', หรือ 'wait' ตามที่ถูกคลิก
                      title: 'Episode',

                    },
                  ]}

                /></Header>
              <Layout className='background'>
                <Form onFinish={onFinish} layout="vertical">
                  <Sider width={500} style={{ backgroundColor: 'transparent' }}>
                    <p className='text-Upload-Series'>Upload Your Series</p>
                    <Form.Item>
                      <p className='text-Square'>Square Thumbnail</p>
                      <div className='bg_btn_square'>
                        <Form.Item
                          name='square_thumbnail'
                        >
                          <Upload
                            action="http://localhost:3000/Publish_Se"
                            listType="picture-card"
                            fileList={fileList1}
                            onPreview={handlePreview1}
                            onChange={handleChange1}
                          >
                            {fileList1.length >= 1 ? null : uploadButton1}
                          </Upload>
                        </Form.Item>
                      </div>
                      <p className='text-Vertical'>Vertical Thumbnail</p>
                      <div className='bg_btn_square'>
                        <Form.Item name='vertical_thumbnail'>
                          <Upload
                            action="http://localhost:3000/Publish_Se"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                          >
                            {fileList.length >= 1 ? null : uploadButton}
                          </Upload>
                        </Form.Item>
                      </div>
                    </Form.Item>
                  </Sider>
                  <Content style={{ width: '50vw', }} className='bg-from' >
                    <Form.Item style={{ paddingLeft: '60px', width: '48vw', height: '60vh', marginTop: '30px' }}

                      labelCol={{ span: 4 }}
                      wrapperCol={{ span: 20 }}

                    >
                      <Form.Item label="Title" name='title' >
                        <Input />
                      </Form.Item>
                      <Form.Item label="Genre" name='catagories'
                      >
                        <Select
                          showSearch
                          placeholder="Select a Genre"
                          optionFilterProp="children"
                          onChange={onChange}
                          onSearch={onSearch}
                          
                        >
                          {Categories.map(category => (
                            <Select.Option key={category.ID} value={category.Type}>
                              {category.Type}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      {/* <p className='text-Summary' style={{ paddingBottom: '50px' }}>Summary</p> */}
                      <Form.Item label="Summary" wrapperCol={{ span: 20 }} name='summary' >
                        <TextArea rows={10} />
                      </Form.Item>
                    </Form.Item>
                  </Content>

                  <Button type="primary" htmlType="submit" style={{ marginLeft: '1200px', marginTop: '230px', borderRadius: '20px', width: '120px', height: '40px' }}  >
                    Create Series
                  </Button>

                </Form>
              </Layout>
            </Layout>


          </Content>
        </Layout>
      </ConfigProvider>
    </>

  )
}

export default Publish_Se