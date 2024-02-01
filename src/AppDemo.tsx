import { Home } from './components/pages/UserList';
import { Users } from './components/pages/Users';
import './main.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { url_home, url_users } from './routes';

function AppDemo() {
    const navigate = useNavigate();

    const handleNavigateToUsers = () => {
        navigate(url_users);
    };

    const handleNavigateToHome = () => {
        navigate(url_home);
    };
    return (
        <>
            <h1>Home</h1>
            <button onClick={handleNavigateToUsers}>Go to Users</button>
            <button onClick={handleNavigateToHome}>Go to Home</button>
            <hr />
            <Outlet />
        </>
    );
}

export default AppDemo;
