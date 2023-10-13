import React, { useState, useEffect } from 'react';
import { Layout, Input, Button, Divider, Card, Form, message } from 'antd';
import "./index.css";

import { CreateComment, GetUsersByUsernameAPI, GetComment,GetUsernameByMemberID } from '../../../services/https';
import { CommentInterface } from '../../../interfaces/IComment';
import Cookies from 'js-cookie';
import { UsersInterface } from '../../../interfaces/IUser';


const { Header, Content } = Layout;
const { TextArea } = Input;





function CommentPage() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [member, setMember] = useState<UsersInterface | undefined>(undefined);
  const [comment_username, setUsername] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../styles/header';
    script.async = true;
    GetUsersByUsername();

  }, []);

  useEffect(() => {
    if (member?.ID) {
      Get_Comments(member.ID);
      Get_Username(member.ID);
      console.log(Mention);
    }
  }, [member]);

  const username = Cookies.get('username');

 
  const GetUsersByUsername = async () => {
    let res = await GetUsersByUsernameAPI(username);
    if (res) {

      setMember(res);
    }
  };

  const [Mention, setComments] = useState<CommentInterface[]>([]);

  const Get_Comments = async (ID: Number | undefined) => {
    let res = await GetComment();
    if (res) {
      console.log(res)
      setComments(res)
    }
  };

  const [name, setUsernames] = useState<UsersInterface[]>([]);
  const Get_Username = async (ID: Number | undefined):Promise<any> => {
    let res = await GetUsernameByMemberID(ID);
    if (res) {
      console.log(res)
      setUsernames(res)
    }
  };
 
  // const comment_username = await Get_Username(MemberID);


  const onFinish = async (values: CommentInterface) => {
    let res = await CreateComment(member?.ID, values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        window.location.reload();
      }, 500);
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
                name="Message"
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
                {Mention.map((m) => (
                  <div>
                    <Card className='card-color'>
                      <h4 style={{ color: "#6844F8" }}>Anonymous</h4>
                      <div>{m.Message}</div>
                    </Card>
                    <Divider></Divider>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>


      </Content>
    </Layout>

  );
}

export default CommentPage;
