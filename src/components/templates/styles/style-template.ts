import styled from 'styled-components';
import { Layout, Menu } from 'antd';
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
    text-align: center;

    div {
        font-size: 40px;
        line-height: 0.8;
        margin: 0 auto;
    }

    div:last-child {
        font-size: 18px;
        margin-top: 10px;
    }
`;

export const StyledMenu = styled(Menu)`
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
