import { Navigate, RouteObject } from 'react-router-dom';
import { Home } from './components/pages/UserList';
import { Users } from './components/pages/Users';
import AppDemo from './AppDemo';

export const url_users = '/users';
export const url_home = '/home';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppDemo />,
        children: [
            {
                path: url_users,
                element: <Users />,
            },
            {
                path: url_home,
                element: <Home />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to={'/'} replace />,
    },
];

export default routes;
