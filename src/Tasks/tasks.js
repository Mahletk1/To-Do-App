import React,{Component} from "react";
import { Header } from "antd/es/layout/layout";
import { DashboardOutlined ,UnorderedListOutlined ,DownOutlined } from '@ant-design/icons';
import {Avatar, Progress, Button, Space, Row, Col} from "antd";
import {Checkbox,Dropdown} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import './styles.css';

export class Tasks extends Component {
    render() {
        return (
            <>
            {/* <Sider >left sidebar</Sider> */}
            <Sider style={{background:'#20212C', visibility: ''}}></Sider>
                <Content  style={{
                        background: '#17181F',
                    }}>
            <div align="middle">
                <div style={{background:'#20212C',height:'90px',width: '870px',borderRadius: '25px',padding: '25px',marginTop:'15%' }} align="start">
                    <Checkbox style={{color:'white', fontSize: '150%',fontWeight:'200',}}>Test Text</Checkbox>
                    <Button style={{background:'#20212C', borderColor:'#20212C', marginLeft:'80%'}}><DownOutlined  style={{background:'#20212C', color:'white'}} /></Button>
                    {/* <Dropdown arrow='true' /> */}
                </div>
            </div>
            </Content>
            </>
          );
    }
}