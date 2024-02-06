import { Navigate, RouteObject } from 'react-router-dom';
import { UserList } from './components/pages/UserList';
import AppDemo from './AppDemo';
import TemplateDemoPage from './components/pages/TemplateDemoPage';

export const url_home = '/home';
export const url_users = '/users';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppDemo />,
        children: [
            { path: url_home, element: <TemplateDemoPage /> },
            { path: url_users, element: <UserList /> },
        ],
    },
    {
        path: '*',
        element: <Navigate to={url_home} replace />,
    },
];

export default routes;
