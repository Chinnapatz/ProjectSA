import React, { useState } from 'react'
import Topmenu from '../component/topmenu'
import { Layout } from 'antd'
import { Steps } from 'antd'
import { ConfigProvider } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import './style/publish_se.css'
import { Button, Form, Input, Select } from 'antd';
import { useNavigate } from "react-router-dom";



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

function Publish_Se() {
  const [current, setCurrent] = useState(0);
  // const onChange = (value: number) => {
  //   
    
  //   setCurrent(value);
  // };

  const handleStepClick = (value: number) => {
      console.log('onChange:', value);
      setCurrent(value);
      if (current === 0) {
        // navigate('/Publish_Ep')
      }
      else{
        return {}
      }
      // ตรวจสอบว่าคลิกที่ Step ไหน
      // และทำสิ่งที่คุณต้องการเช่นการอัพเดต state หรืออื่น ๆ
    };
    const navigate = useNavigate();
    // Square button
    const [fileList1, setFileList1] = useState<UploadFile[]>([]);
    const handlePreview1 = async (file: UploadFile) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase641(file.originFileObj as RcFile);
      }
    };
    const handleChange1: UploadProps['onChange'] = ({ fileList: newFileList }) =>
      setFileList1(newFileList);
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
                    onChange={handleStepClick}
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
                  <Sider width={500} style={{ backgroundColor: 'transparent' }}>
                    <p className='text-Upload-Series'>Upload Your Series</p>
                    <p className='text-Square'>Square Thumbnail</p>
                    <div className='bg_btn_square'>
                      <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture-card"
                        fileList={fileList1}
                        onPreview={handlePreview1}
                        onChange={handleChange1}
                      >
                        {fileList1.length >= 1 ? null : uploadButton1}
                      </Upload>
                    </div>
                    <p className='text-Vertical'>Vertical Thumbnail</p>
                    <div className='bg_btn_square'>
                      <Upload

                        className='btn_upload_square'
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                      >
                        {fileList.length >= 1 ? null : uploadButton}
                      </Upload>
                    </div>
                  </Sider>
                  <Content style={{ width: '50vw', }} className='bg-from' >
                    <Form style={{ paddingLeft: '30px', width: '48vw', height: '60vh', marginTop: '30px', backgroundColor: 'transparent', borderColor: 'transparent', fontSize: '40px', color: 'white' }}
                      layout="vertical"
                      labelCol={{ span: 4 }}
                      wrapperCol={{ span: 10 }}
                    >
                      <Form.Item label="Title" wrapperCol={{ span: 15 }} >
                        <Input />
                      </Form.Item>
                      <Form.Item label="Genre" >
                        <Select>
                          <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Summary" wrapperCol={{ span: 20 }}>
                        <TextArea rows={10} />
                      </Form.Item>
                      <Form.Item >
                        <Button type="primary" htmlType="submit" style={{ marginLeft: '0px', marginTop: '0px', borderRadius: '20px', width: '120px', height: '40px' }}>
                          Create Series
                        </Button>
                      </Form.Item>
                    </Form>
                  </Content>
                </Layout>
              </Layout>


            </Content>
          </Layout>
        </ConfigProvider>
      </>

    )
  }

  export default Publish_Se