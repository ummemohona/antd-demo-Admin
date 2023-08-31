import { Layout } from 'antd';
import React, {useState, FC, ReactNode} from 'react';
import SideBar from "@components/layout/siderBar";
import HeaderPage from "@components/layout/header";

const {  Content } = Layout;
const LayoutPage: FC<{children: ReactNode}> = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <SideBar collapsed={collapsed} />
            <Layout className="site-layout">
                <HeaderPage collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutPage;