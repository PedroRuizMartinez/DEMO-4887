import { Layout, Menu, Typography } from 'antd';
import { Outlet } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { url_home, url_users } from '../../routes';
import {
    StyledSider,
    SidebarHeader,
    StyledMenu,
    StyledContent,
    MenuItemLink,
} from './styles/style-template';
import { useEffect } from 'react';
import useAuthentication from '../../hooks/useAuthentication';

const HomeTemplate: React.FC = () => {
    const { user, role, checkAuthentication, handleLogout } = useAuthentication();
    const styleParagraph = {
        fontSize: 14,
        margin: '15px',
        color: 'white',
    };

    useEffect(() => {
        checkAuthentication();
    }, [checkAuthentication]);

    return (
        <Layout style={{ display: 'flex', flexDirection: 'row' }}>
            <StyledSider width={240}>
                <SidebarHeader style={{ background: '#142a61' }}>
                    <div>
                        <UserOutlined />
                    </div>
                    <div>CONTACT USERS</div>
                    {user && role && (
                        <>
                            <Typography.Paragraph style={styleParagraph}>
                                {user}
                            </Typography.Paragraph>
                            <Typography.Paragraph style={styleParagraph}>
                                {role}
                            </Typography.Paragraph>
                        </>
                    )}
                </SidebarHeader>
                <StyledMenu mode='inline' itemIcon={false}>
                    <Menu.Item key='home'>
                        <MenuItemLink to={url_home}>Home</MenuItemLink>
                    </Menu.Item>
                    <Menu.Item key='users'>
                        <MenuItemLink to={url_users}>Users</MenuItemLink>
                    </Menu.Item>
                    <Menu.Item key='logout' onClick={handleLogout}>
                        Cerrar sesión
                    </Menu.Item>
                </StyledMenu>
            </StyledSider>
            <Layout style={{ padding: '2px 0px 0px 0px', flexGrow: 4 }}>
                <StyledContent>
                    <Outlet />
                </StyledContent>
            </Layout>
        </Layout>
    );
};

export default HomeTemplate;
