import React from 'react';
import LoginForm from '../organisms/LoginForm';
import { useNavigate } from 'react-router-dom';
import { url_home } from '../../routes';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate(url_home);
    };

    return (
        <>
            <LoginForm onLogin={handleLogin} />
        </>
    );
};

export default LoginPage;
