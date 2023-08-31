import React, { useState } from 'react';
import {Button, Form, Input, Modal, Select} from 'antd';


const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const AddNewDept: React.FC<{ open: boolean; onClose: () => void }> = ({
                                                                             open,
                                                                             onClose,
                                                                         })=> {
    const [form] = Form.useForm();
    const onFinish = (value: object) => {
        console.log(value);
        onClose();
    };

    const footerButtons = [
        <Button
            form="departmentFrom"
            key="submit"
            htmlType="submit"
            type="primary"
        >
            Submit
        </Button>
    ];

    return (
        <Modal
            title="Department Form"
            open={open}
            footer={footerButtons}
        >
            <Form
                {...layout}
                form={form}
                name="departmentFrom"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="Department" label="Department" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select your status"
                        allowClear
                    >
                        <Option value="unavailable">Unavailable</Option>
                        <Option value="available">Available</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddNewDept;
