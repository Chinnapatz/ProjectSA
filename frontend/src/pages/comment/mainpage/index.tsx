import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import { Layout, Input, Pagination, Button, Divider, Card } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component'; // npm install --save react-infinite-scroll-component
import "./index.css";


const { Header, Content } = Layout;
const { TextArea } = Input;
const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};




function Mainpage() {
  return (
    <Layout className="bg-color">

      <Content >
        <div>
          <div style={{ justifyContent: "center", padding: "100px 300px" }}>
            <TextArea showCount maxLength={500} style={{ height: 120, width: "100%", resize: 'none' }} onChange={onChange} placeholder="Input allowed up to 500 characters" />
            <div>
              <Button style={{ backgroundColor: "#5C469C", height: 50, width: 150, justifyContent: "center", marginTop: "10px" }} type="primary">Post</Button>
            </div>
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
              
              {/* <Card>
                <h4 style={{ color: "#6844F8" }}>Username</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nihil, nostrum eum repellat eaque blanditiis id pariatur ullam debitis fugiat inventore repudiandae! Mollitia, ab vel necessitatibus alias sed quo quaerat.</p>
              </Card>
              <Divider></Divider>
              <Card>
                <h4 style={{ color: "#6844F8" }}>Username</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum vitae hic inventore perspiciatis. Accusantium eveniet qui asperiores? Quae culpa voluptatibus voluptas provident accusantium quo, et tenetur eum dolorem at!</p>
              </Card>
              <Divider></Divider>
              <Card>
                <h4 style={{ color: "#6844F8" }}>Username</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quo rerum ratione eaque commodi dolore temporibus labore. Placeat animi aliquam commodi omnis, quis ratione! Cum ea quod odio voluptates quis?</p>
              </Card> */}
              <Divider><Button type="link">SEE MORE</Button></Divider>
            </div>
          </div>


        </div>


      </Content>
    </Layout>

  );
}

export default Mainpage;
