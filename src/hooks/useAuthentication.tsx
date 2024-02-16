import { message } from 'antd';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { url_login } from '../routes';

const useAuthentication = () => {
    const API_KEY = 'YWRtaW46YWRtaW4=';
    const [userInfo, setUserInfo] = useState({ user: '', role: '', authenticated: false });
    const navigate = useNavigate();

    const checkAuthentication = useCallback(() => {
        const credentials = localStorage.getItem('credentials');
        if (credentials && credentials === API_KEY) {
            setUserInfo({ user: 'admin', role: 'ROLE_ADMIN', authenticated: true });
        } else {
            setUserInfo({ user: '', role: '', authenticated: false });
            navigate(url_login);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('credentials');
        setUserInfo({ user: '', role: '', authenticated: false });
        navigate(url_login);
        message.success('Sesión cerrada exitosamente');
    };

    return { ...userInfo, checkAuthentication, handleLogout };
};

export default useAuthentication;
