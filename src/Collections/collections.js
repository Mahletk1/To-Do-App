import React,{Component} from "react";
import Card from "antd/es/card/Card";
import { Row, Col } from "antd";
export class Collections extends Component {
    render() {
        
        return (
        <div align="middle" style={{marginTop:'15%'}}>
             <Row gutter={[16, 16]} style={{width:'50%'}}>
                <Col lg={8} md={12} sm={24} xs={24} style={{background:'#17181F', height:'200px'}} align="middle">
                    <div style={{background:'#20212C',height:'100%',width: '100%',borderRadius: '25px' }}> </div>
                    </Col>
                <Col lg={8} md={12} sm={24} xs={24} style={{background:'#17181F', height:'200px'}} align="middle">
                <div style={{background:'#20212C',height:'100%',width: '100%',borderRadius: '25px' }}> </div>
                    </Col>
                <Col lg={8} md={12} sm={24} xs={24} style={{background:'#17181F', height:'200px'}} align="middle">
                <div style={{background:'#20212C',height:'100%',width: '100%',borderRadius: '25px' }}> </div>
                    </Col>
                <Col lg={8} md={12} sm={24} xs={24} style={{background:'#17181F', height:'200px'}} align="middle">
                <div style={{background:'#20212C',height:'100%',width: '100%',borderRadius: '25px' }}> </div>
                    </Col>
            </Row>
        </div>
           
          );
    }
}