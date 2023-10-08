import React, { useState } from 'react'
import Topmenu from '../component/topmenu'
import { Layout } from 'antd'
import { Steps } from 'antd'
import { ConfigProvider } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import './style/publish_ep.css'
import { Button, Form, Input, Select } from 'antd';
import { useNavigate } from "react-router-dom";
import { InputNumber } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message } from 'antd';
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

const getBase64 = (file1: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file1);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};


function Publish_Ep() {
    const [current, setCurrent] = useState(0);
    const onChange = (value: number) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    const navigate = useNavigate();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }
    };
    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);
    const uploadButton = (
        <div>
            <PlusOutlined className='text-btn-upload-square' />
            <div className='text-btn-upload-square' style={{ marginTop: 10 }}>select an image to upload</div>
        </div>);
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '5C469C',

                },
                components: {
                    Upload: {
                        actionsColor: 'white',
                        colorBorder: 'white',
                        colorPrimary: 'black',
                        controlHeightLG: 70,
                    },
                    Form: {
                        labelColor: 'white',
                        labelFontSize: 24,
                    },

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
                                onChange={onChange}
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
                            /> </Header>
                        <Layout className='background'>
                            <Sider width={500} style={{ backgroundColor: 'transparent' }}>
                                <p className='text-Upload-Series'>Upload Your Episode</p>
                                <p className='text-Square'>Thumbnail</p>
                                <div className='bg_btn_thumbnail'>
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
                                    labelCol={{ span: 10 }}
                                    wrapperCol={{ span: 10 }}
                                >
                                    <Form.Item label="Episode Name" wrapperCol={{ span: 15 }} >
                                        <Input />

                                    </Form.Item>
                                    <p style={{fontSize:'24px'}}>Upload file</p>
                                    <Dragger {...props} style={{
                                        marginTop:'20px',
                                        maxWidth: '850px', // กำหนดความกว้างสูงสุด
                                        maxHeight: '300px', // กำหนดความสูงสูงสุด
                                        
                                    }} >
                                        <p >
                                            <InboxOutlined />
                                        </p>
                                        <p >Click or drag file to this area to upload</p>
                                        <p >
                                            Support for a single or bulk upload. 
                                        </p>
                                    </Dragger>
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit" style={{ marginLeft:'590px',marginTop: '50px',borderRadius:'20px',width:'120px',height:'40px' }}>
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

    )
}

export default Publish_Ep