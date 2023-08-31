import React, {useState} from 'react';
import {Button, PageHeader, Space, Table, Tag} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import AddNewDept from "@containers/user-management/deprtments/form";

const { Column, ColumnGroup } = Table;

interface DataType {
    key: React.Key;
    Name: string;
    Description: string;
    status: string;
}

const data: DataType[] = [
    {
        key: '1',
        Name: 'John',
        Description: 'ldasdwedfsd',
        status: 'True',

    },
    {
        key: '2',
        Name: 'Jim',
        Description: 'sdsfdffdsd',
        status: 'False',

    },
    {
        key: '3',
        Name: 'Joe',
        Description: 'dsfsdfdf',
        status: 'False',

    },
];


const DepartmentTable: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };
    return (

  <>
      <PageHeader
          title="Departments"
          subTitle={`List of all Departments.`}
          onBack={() => window.history.back()}
          extra={[  <Button onClick={showModal}>Open Modal</Button>,
                    <AddNewDept open={isModalVisible} onClose={closeModal} />]}>
      </PageHeader>
      <Table dataSource={data}>
          <Column title="Name" dataIndex="Name" key="Name" />
          <Column title="Description" dataIndex="Description" key="Description" />
          <Column title="Status" dataIndex="status" key="status" />
          <Column
              title="Action"
              key="action"
              render={(_: any, record: DataType) => (
                  <Space size="middle">
                      <a><EditOutlined /></a>
                      <a><DeleteOutlined /></a>
                  </Space>
              )}
          />
      </Table>
  </>
);

}

export default DepartmentTable;