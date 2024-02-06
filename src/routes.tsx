import { Navigate, RouteObject } from 'react-router-dom';
import { UserListPage } from './components/pages/UserListPage';
import AppDemo from './AppDemo';
import TemplateDemoPage from './components/pages/TemplateDemoPage';
import { ErrorPage } from './components/pages/ErrorPage';

export const url_home = '/home';
export const url_users = '/users';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppDemo />,
        errorElement: <ErrorPage />,
        children: [
            { path: url_home, element: <TemplateDemoPage /> },
            { path: url_users, element: <UserListPage /> },
        ],
    },
    {
        path: '*',
        element: <Navigate to={url_home} replace />,
    },
];

export default routes;
