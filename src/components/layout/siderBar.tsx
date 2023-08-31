import React, {FC, useState} from "react";
import {Button, Layout, Menu, MenuProps} from 'antd';
import {
    HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ReconciliationOutlined, SettingOutlined
} from '@ant-design/icons';
import {useRouter} from "next/router";

const { Sider } = Layout;


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard', '1', <HomeOutlined />),
    getItem('User Management', 'sub1', <ReconciliationOutlined />, [
        getItem('Department', '2'),
    ]),
    getItem('Web setup', '3', <SettingOutlined />),


];

const SideBar: FC<{
    collapsed: boolean;
}> = (
    {
        collapsed
    }
) => {
    const router = useRouter();

    const onClick: MenuProps['onClick'] = (e) => {
        router.push('/user-management/departments')
        console.log('click ', e);
    };

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" style={{height: '32px', margin: '16px', background: "rgba(255, 255, 255, 0.3)"}}/>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    items={items}
                    onClick={onClick}
                />
        </Sider>
    )
};

export default SideBar;