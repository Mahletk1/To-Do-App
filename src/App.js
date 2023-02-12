import React from "react";
import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import { Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Footer } from "antd/es/layout/layout";
import { Topbar } from "./Topbar/topbar";

const App = () => {
    return (
        <>  
        <Layout>
         <Topbar />
            <Layout style={{height: window.innerHeight}}>
                {/* <Sider style={{
                        // padding: '70px 0 0',
                        // width: "100%",
                        // lexShrink: '0',
                        background: '#17181F',
                        // position: 'relative'
                    }}>left sidebar</Sider> */}
                    <Layout>
                    <Content  style={{
                        background: '#17181F',
                    }}>main content</Content>
                    </Layout>
               
            </Layout>
        </Layout>
        </>
        );
}
export default App;