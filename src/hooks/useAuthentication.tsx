import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { url_login } from '../routes';

const useAuthentication = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        checkAuthentication();
    }, []);

    const checkAuthentication = () => {
        const credentials = localStorage.getItem('credentials');
        if (credentials && credentials === 'YWRtaW46YWRtaW4=') {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
            navigate(url_login);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('credentials');
        setAuthenticated(false);
        navigate(url_login);
        message.success('Sesión cerrada exitosamente');
    };

    return { authenticated, checkAuthentication, handleLogout };
};

export default useAuthentication;
