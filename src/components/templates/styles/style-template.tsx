import styled from 'styled-components';
import { Layout, Menu as AntdMenu } from 'antd';
import { Link } from 'react-router-dom';


// Estilos HomeTemplate.tsx
export const StyledSider = styled(Layout.Sider)`
    background: #142a61;
    color: white;
    flex-grow: 1;
    border: 2px solid #ddd;
    overflow: auto;
`;

export const SidebarHeader = styled.div`
    padding: 2em 1em;
    font-size: 2em;
    font-weight: bold;

    div {
        font-size: 70px;
        line-height: 0.8;
        margin-left: 30%;
    }

    div:last-child {
        font-size: 18px;
        margin-left: 15px;
        margin-top: 10px;
    }
`;

export const StyledMenu  = styled(AntdMenu)`
    height: 100vh;
    background: #142a61;
    color: #e5e5e5;
`;

export const StyledContent = styled(Layout.Content)`
    border: 20px solid #ccc;
    padding: 10px;
    margin: 0;
    min-height: 280px;
    padding-right: 3vw;
    padding-left: 3vw;
`;

export const MenuItemLink = styled(Link)`
    font-size: 16px;
`;

// Fin estilos HomeTemplate.tsx
