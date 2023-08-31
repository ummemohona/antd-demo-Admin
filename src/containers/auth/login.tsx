import {Button, Card, Checkbox, Form, Input} from 'antd';
import Link from 'next/link';
import React, {useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";


const baseUrl = 'https://staging-api.fithobo.com/back-end/auth/login'
const LoginForm: React.FC = () => {
    const router = useRouter();
    const onFinish = (values: any) => {
        axios.post(
            baseUrl,
            {
                email: values.username,
                password: values.password
            },
            {
                auth: {
                    username: "demo-client",
                    password: "demo-secret"
                }
            }
        ).then((response: any) => {
            localStorage.setItem('accessToken', JSON.stringify(response.data.data.access))
            localStorage.setItem('refreshToken', JSON.stringify(response.data.data.refresh))
            localStorage.setItem('user', JSON.stringify(response.data.data.user))
            router.push('/admin')
        })
            // .catch(function (error) {
            //     console.log(error);
            // });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
            <Card style={{ width: 400 }}>
                <div style={{ display: "flex", justifyContent: "left", paddingBottom: "50px" }} >
                    <img src="/icons/logo.png" alt="" width={150} />
                </div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                                Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginForm;