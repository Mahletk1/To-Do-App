import React,{Component} from "react";
import { Header } from "antd/es/layout/layout";
import { DashboardOutlined ,UnorderedListOutlined ,ShoppingCartOutlined} from '@ant-design/icons';
import {Avatar, Progress, Button, Space, Row, Col} from "antd";

export class Topbar extends Component {
    render() {
        const styling = {
            background: "#20212C",
            // position: "fixed",
            // width: "100%",
            // height: 70,
            // zIndex: 1,
          };
        return (
            <Header
            style={styling}>
              <Row>
                  <Col span={3}>
                    <DashboardOutlined  style={{ fontSize: '150%', color: 'white', marginRight:'7px'}}/> <span style={{ fontSize: '130%', color: 'white' }}> Dashboard </span>
                  </Col>
                  <Col span={3}>
                  <UnorderedListOutlined  style={{ fontSize: '150%', color: 'white',marginRight:'7px'}}/> <span style={{ fontSize: '130%', color: 'white' }}> Collections </span>
                  </Col>
              </Row>
              
              
                <ul className="isoRight">
                  <li className="isoSearch">
                   Hello1 {/* <TopbarSearch locale={locale} /> */}
                  </li>

                  <li
                    // onClick={() => this.setState({ selectedItem: "notification" })}
                    className="isoNotify"
                  >
                    Hello1{/* <TopbarNotification locale={locale} /> */}
                  </li>

                  <li
                    // onClick={() => this.setState({ selectedItem: "message" })}
                    className="isoMsg"
                  >
                    Hello1{/* <TopbarMessage locale={locale} /> */}
                  </li>

                  <li
                    // onClick={() => this.setState({ selectedItem: "user" })}
                    className="isoUser"
                  >
                    Hello1{/* <TopbarUser locale={locale} /> */}
                  </li>
                </ul>
            </Header>
          );
    }
}