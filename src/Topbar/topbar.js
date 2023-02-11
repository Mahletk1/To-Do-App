import React,{Component} from "react";
import { Header } from "antd/es/layout/layout";

export class Topbar extends Component {
    render() {
        const styling = {
            background: "#20212C",
            position: "fixed",
            width: "100%",
            height: 70,
            zIndex: 1,
          };
        return (
            <Header
            style={styling}>

            </Header>
          );
    }
}