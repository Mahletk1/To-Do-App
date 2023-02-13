import React from "react";
import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import { Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Footer } from "antd/es/layout/layout";
import { Topbar } from "./Topbar/topbar";
import { Collections } from "./Collections/collections";
import { Tasks } from "./Tasks/tasks";

const App = () => {
    return (
        <>  
        <Layout style={{
                      'height':  window.innerHeight
                    }}>
        <Topbar />
            <Layout>    
                {/* <Collections /> */}
                <Tasks />
            </Layout>
        </Layout>
        </>
        );
}
export default App;