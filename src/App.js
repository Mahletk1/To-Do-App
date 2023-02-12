import React from "react";
import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import { Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Footer } from "antd/es/layout/layout";
import { Topbar } from "./Topbar/topbar";
import { Collections } from "./Collections/collections";

const App = () => {
    return (
        <>  
        <Layout style={{
                      'height':  window.innerHeight
                    }}>
        <Topbar />
            <Layout>
                {/* <Sider>left sidebar</Sider> */}
                <Content  style={{
                        background: '#17181F',
                    }}><Collections /></Content>
            </Layout>
        </Layout>
        {/* <Layout style={{ 'height': '600px' }}>
            <Topbar />
            <Layout 
            className="isoContentMainLayout"
            style={{
                      'height': '500px'
                    }}>
                <Content
                    style={{
                        // padding: '70px 0 0',
                        width: "100%",
                        // lexShrink: '0',
                        background: '#17181F',
                        // position: 'relative'
                    }}>
                </Content>
            </Layout>
        </Layout> */}
        </>
        );
}
export default App;