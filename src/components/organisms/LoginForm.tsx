import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const API_KEY = 'YWRtaW46YWRtaW4='; // admin:admin

    const handleLogin = () => {
        // Verificar si el usuario y la contraseña coinciden con API_KEY
        const encodedCredentials = btoa(`${username}:${password}`);
        if (encodedCredentials === API_KEY) {
            // API_KEY en base64
            // Almacenar las credenciales en localStorage
            localStorage.setItem('credentials', encodedCredentials);
            // Ejecutar la función de inicio de sesión
            onLogin();
        } else {
            message.error('Credenciales incorrectas');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <Title level={3} style={{ marginBottom: '2rem' }}>
                Iniciar sesión
            </Title>
            <Form name='normal_login' className='login-form' initialValues={{ remember: true }}>
                <Form.Item
                    name='username'
                    rules={[{ required: true, message: 'Por favor ingrese su usuario!' }]}
                >
                    <Input
                        prefix={<UserOutlined className='site-form-item-icon' />}
                        placeholder='Usuario'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name='password'
                    rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
                >
                    <Input
                        prefix={<LockOutlined className='site-form-item-icon' />}
                        type='password'
                        placeholder='Contraseña'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'
                        onClick={handleLogin}
                        style={{ width: '100%' }}
                    >
                        Iniciar sesión
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
