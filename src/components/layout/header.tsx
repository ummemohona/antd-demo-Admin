import React, {FC} from "react";
import {ArrowRightOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Button, Layout, List, Menu} from "antd";
import Link from "next/link";
import {useRouter} from "next/router";

const { Header } = Layout;
const data = [{ title: 'User' }]

const HeaderPage: FC<{
    collapsed: boolean,
    setCollapsed: (isCollapsed: boolean) => void
}> = (
    {
        collapsed,
        setCollapsed
    }
) => {
    const router = useRouter();

    const removeLocalstorage = ()=> {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user');
        router.push('/')
    }
    return (
        <Header className="site-layout-background" style={{ padding: "0 8px", background: "#fff" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })}

                <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                    <Menu.SubMenu key="SubMenu" title="User" icon={<UserOutlined />}>
                        <Menu.Item key="two">
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                        />
                                    </List.Item>
                                )}
                            />
                        </Menu.Item>
                        <Menu.Item key="three" icon={<ArrowRightOutlined />}>
                            <Button type="text" htmlType="submit" style={{}} onClick={removeLocalstorage}>
                                    Sign Out
                            </Button>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </div>
        </Header>
    )
}

export default HeaderPage;