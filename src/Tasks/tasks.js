import React,{Component, useState} from "react";
import { Header } from "antd/es/layout/layout";
import { DashboardOutlined ,UnorderedListOutlined ,DownOutlined,UpOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import {Avatar, Progress, Button, Space, Row, Col} from "antd";
import {Checkbox,Dropdown} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { ReadFilled,UserOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import './styles.css';

export class Tasks extends Component {
   state={
    showTasks:false
   }
    render() {
        return (
            <>
            {/* <Sider >left sidebar</Sider> */}
            <Sider style={{background:'#20212C', visibility: ''}}>
                <p style={{color:'white'}}>Collections</p>
                <Link><Avatar style={{ backgroundColor: '#FA77A1',borderRadius: '15px' }} shape= "square" size="large" >
                                    <ReadFilled style={{ fontSize: '200%', color: 'white',padding:'5px' }}/>
                            </Avatar><span>School</span></Link>
            </Sider>
                <Content  style={{
                        background: '#17181F',
                    }}>
            <div align="middle">
                
                <div style={{background:'#20212C',height:'90px',width: '870px',borderRadius: '25px',padding: '25px',marginTop:'15%' }} align="start">
                    <Checkbox style={{color:'white', fontSize: '150%',fontWeight:'200',}}>Test Text</Checkbox>
                    {this.state.showTasks?
                    <Button onClick={()=>{this.setState({ showTasks: !this.state.showTasks })}} 
                    style={{background:'#20212C', borderColor:'#20212C', marginLeft:'80%'}}>
                        <DownOutlined  style={{background:'#20212C', color:'white'}} /></Button>:
                        <Button onClick={()=>{this.setState({ showTasks: !this.state.showTasks })}} 
                        style={{background:'#20212C', borderColor:'#20212C', marginLeft:'80%'}}><UpOutlined  style={{background:'#20212C', color:'white'}} /></Button>}
                    {/* <Dropdown arrow='true' /> */}
                   {this.state.showTasks? <div>
                     <div style={{background:'#20212C',height:'70px',width: '800px',borderRadius: '25px',padding: '20px',marginTop:'5%' }} align="start">
                    <Checkbox style={{color:'white', fontSize: '150%',fontWeight:'200',}}>Test Text</Checkbox></div>  
                    <div style={{background:'#20212C',height:'70px',width: '800px',borderRadius: '25px',padding: '20px',marginTop:'1%' }} align="start">
                    <Checkbox style={{color:'white', fontSize: '150%',fontWeight:'200',}}>Test Text</Checkbox></div>  
                    <div style={{background:'#20212C',height:'70px',width: '800px',borderRadius: '25px',padding: '20px',marginTop:'1%' }} align="start">
                    <Checkbox style={{color:'white', fontSize: '150%',fontWeight:'200',}}>Test Text</Checkbox></div>      
                    {/* <Dropdown arrow='true' /> */}
                </div>:null}
                </div>
            </div>
            </Content>
            </>
          );
    }
}