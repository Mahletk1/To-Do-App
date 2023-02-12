import React,{Component} from "react";
import Card from "antd/es/card/Card";
import { ReadFilled,UserOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import {Avatar, Progress, Button, Space, Row, Col} from "antd";


export class Collections extends Component {
    render() {
        
        return (
        <div align="middle" style={{marginTop:'15%'}}>
            <Row gutter={[16, 16]} style={{width:'45%'}}>
                <Col sm={24} xs={24}>
                    <p style={{ fontSize: '200%',fontWeight:'600', color: 'white',marginTop:'-27%', marginBottom:'-5px' }} align="start"> Collections </p>
                </Col>
                <Col sm={24} xs={24} align="start">
                    <div style={{ marginTop:'-13%', marginBottom:'', }}>
                        <Button ghost="true" style={{borderColor:'#414053', color:'#D3D3D3',  marginRight:'15px'}}>Favourites</Button> 
                        <Button ghost="true" style={{borderColor:'#414053', color:'#D3D3D3', background:'#414053'}}>All Collections</Button>
                    </div>
                </Col>
            </Row>
            
             <Row gutter={[16, 16]} style={{width:'45%'}}>
                <Col lg={8} md={12} sm={24} xs={24} style={{background:'#17181F', height:'200px'}} align="middle">
                    <div style={{background:'#20212C',height:'100%',width: '100%',borderRadius: '25px',padding: '25px' }} align="start">
    
                            <Avatar style={{ backgroundColor: '#FA77A1',borderRadius: '15px' }} shape= "square" size="large" >
                                    <ReadFilled style={{ fontSize: '200%', color: 'white',padding:'5px' }}/>
                            </Avatar>
                             
                            <Row>
                                <Col span={12}>
                                    <p style={{ fontSize: '150%', color: 'white',marginTop:'60px', marginBottom:'-5px' }}> School </p>
                                    <p style={{ fontSize: '85%', color: 'grey'}}>4/8 done</p>
                                </Col>
                                <Col span={12} >
                                    <div style={{marginTop:'80px'}} align="end">
                                        <Progress type="circle" percent={100} width={30} strokeColor = "#FA77A1" />
                                    </div>
                                </Col>
                            </Row>
                    </div>
                   
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} style={{background:'#17181F', height:'200px'}} align="middle">
                    <div style={{background:'#20212C',height:'100%',width: '100%',borderRadius: '25px',padding: '25px' }} align="start">
    
                            <Avatar style={{ backgroundColor: '#6FC4BE',borderRadius: '15px' }} shape= "square" size="large" >
                                    <UserOutlined style={{ fontSize: '200%', color: 'white',padding:'5px' }}/>
                            </Avatar>
                             
                            <Row>
                                <Col span={12}>
                                    <p style={{ fontSize: '150%', color: 'white',marginTop:'60px', marginBottom:'-5px' }}> Personal </p>
                                    <p style={{ fontSize: '85%', color: 'grey'}}>4/8 done</p>
                                </Col>
                                <Col span={12}>
                                    <div style={{marginTop:'80px'}} align="end">
                                        <Progress type="circle" percent={45} width={30} strokeColor = "#6FC4BE" showInfo={false}/>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                   
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} style={{background:'#17181F', height:'200px'}} align="middle">
                    <div style={{background:'#20212C',height:'100%',width: '100%',borderRadius: '25px',padding: '25px' }} align="start">
    
                            <Avatar style={{ backgroundColor: '#AD6DDD',borderRadius: '15px' }} shape= "square" size="large" >
                                    <ReadFilled style={{ fontSize: '200%', color: 'white',padding:'5px' }}/>
                            </Avatar>
                             
                            <Row>
                                <Col span={12}>
                                    <p style={{ fontSize: '150%', color: 'white',marginTop:'60px', marginBottom:'-5px' }}> Design </p>
                                    <p style={{ fontSize: '85%', color: 'grey'}}>4/8 done</p>
                                </Col>
                                <Col span={12}>
                                    <div style={{marginTop:'80px'}} align="end">
                                        <Progress type="circle" percent={70} width={30} strokeColor = "#AD6DDD"/>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                   
                </Col>
                <Col lg={8} md={12} sm={24} xs={24} style={{background:'#17181F', height:'200px'}} align="middle">
                    <div style={{background:'#20212C',height:'100%',width: '100%',borderRadius: '25px',padding: '25px' }} align="start">
    
                            <Avatar style={{ backgroundColor: '#CFB452',borderRadius: '15px' }} shape= "square" size="large" >
                                    <ShoppingCartOutlined  style={{ fontSize: '200%', color: 'white',padding:'5px' }}/>
                            </Avatar>
                             
                            <Row>
                                <Col span={12}>
                                    <p style={{ fontSize: '150%', color: 'white',marginTop:'60px', marginBottom:'-5px' }}> Groceries </p>
                                    <p style={{ fontSize: '85%', color: 'grey'}}>4/8 done</p>
                                </Col>
                                <Col span={12}>
                                    <div style={{marginTop:'80px'}} align="end">
                                        <Progress type="circle" percent={60} width={30} strokeColor = "#CFB452"/>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                   
                </Col>
            </Row>
        </div>
           
          );
    }
}