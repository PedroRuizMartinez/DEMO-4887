import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { UserList } from '../pages/UserList';
import { UserOutlined } from '@ant-design/icons';
import { url_home, url_users } from '../../routes';

const { Sider, Content } = Layout;

const HomeTemplate: React.FC = () => {
    const location = useLocation();

    return (
        <Layout style={{ display: 'flex', flexDirection: 'row' }}>
            <Sider
                width={200}
                style={{
                    background: '#142a61',
                    color: 'white',
                    flexGrow: 1,
                    border: '2px solid #ddd',
                    overflow: 'auto',
                }}
            >
                <div
                    style={{
                        padding: '2em 1em',
                        fontSize: '2em',
                        fontWeight: 'bold',
                    }}
                >
                    <div style={{ fontSize: '70px', lineHeight: 0.8, marginLeft: '30%' }}>
                        <UserOutlined />
                    </div>
                    <div style={{ fontSize: '18px', marginLeft: '15px', marginTop: '10px' }}>
                        CONTACT USERS
                    </div>
                </div>
                <Menu
                    mode='inline'
                    style={{
                        height: '100vh',
                        background: '#142a61',
                        color: '#e5e5e5',
                    }}
                    itemIcon={false}
                    items={[
                        { key: 'home', label: <Link to={url_home}>Home</Link> },
                        { key: 'users', label: <Link to={url_users}>Users</Link> },
                    ]}
                />
            </Sider>
            <Layout style={{ padding: '2px 0px 0px 0px', flexGrow: 4 }}>
                <Content
                    style={{
                        border: '20px solid #ccc',
                        padding: 10,
                        margin: 0,
                        minHeight: 280,
                        paddingRight: '3vw',
                        paddingLeft: '3vw',
                    }}
                >
                    {location.pathname === url_users ? <UserList /> : <Outlet />}
                </Content>
            </Layout>
        </Layout>
    );
};

export default HomeTemplate;
