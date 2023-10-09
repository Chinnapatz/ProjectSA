import React, { useState, useEffect } from 'react';
import { Layout, Input, Button, Divider, Card, Form, message, theme } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./index.css";

import { CreateComment } from '../../../services/https';
import { CommentInterface } from '../../../interfaces/IComment';
import type { SizeType } from 'antd/es/config-provider/SizeContext';


const { Header, Content } = Layout;
const { TextArea } = Input;




function CommentPage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [size, setSize] = useState<SizeType>('large');

  



  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: CommentInterface) => {
    let res = await CreateComment(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
    message.success('คอมเมนต์ของคุณถูกเผยแพร่เรียบร้อยแล้ว');
    form.resetFields();
  };
  return (
    <Layout className="bg-color">

      <Content >
        <div>
          <div className='content-style'>
            <Form
              form={form}
              onFinish={onFinish}
            >
              <Form.Item
              name="message"
              >
                <TextArea
                  className='textarea-style'
                  showCount maxLength={500}
                  placeholder="Input allowed up to 500 characters"
                />
              </Form.Item>
              <Form.Item>
                <Button className='submit-style'
                  type="primary"
                  htmlType='submit'
                >Post
                </Button>
              </Form.Item>
            </Form>
            <div>
              <div>
                <Divider orientation="left">
                  <p>Comment</p>
                </Divider>
              </div>
              <div>
                <Card className='card-color'>
                  <h4 style={{ color: "#6844F8" }}>Username</h4>
                  <p>iatur quibusdam non hic accusantium maxime ea officia! Beatae praesentium iste necessitatibus.</p>
                </Card>
                <Divider></Divider>
              </div>
            </div>
          </div>


        </div>


      </Content>
    </Layout>

  );
}

export default CommentPage;
