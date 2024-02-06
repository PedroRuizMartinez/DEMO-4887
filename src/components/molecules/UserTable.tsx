import React from 'react';
import { Table } from 'antd';
import { User } from '../../../src-generated/openapi';

const { Column } = Table;

interface UserTableProps {
    data: User[];
    onRowClick: (record: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({ data, onRowClick }) => {
    return (
        <Table
            dataSource={data}
            rowKey='id'
            onRow={(record) => ({
                onClick: () => onRowClick(record),
            })}
            pagination={{
                pageSize: 6,
                total: data.length,
                showQuickJumper: false,
                itemRender: (_current, type, originalElement) => {
                    if (type === 'page') {
                        return (
                            <span style={{ margin: '0 5px', display: 'inline-block' }}>
                                {originalElement}
                            </span>
                        );
                    }
                    return originalElement;
                },
                style: { display: 'flex', justifyContent: 'center' },
            }}
            style={{ width: '100%', cursor: 'pointer' }}
        >
            <Column title='Nombre' dataIndex='name' key='name' />
            <Column title='Correo Electrónico' dataIndex='email' key='email' />
        </Table>
    );
};

export default UserTable;
