import { useEffect, useState } from 'react';
import { User } from '../../../src-generated/openapi';
import { useUsers } from '../../hooks/useUsers';

interface UsersProps {
    // Props
}

export const Users: React.FC<UsersProps> = () => {
    const [user, setUser] = useState<User>();
    const { getUserById, selectedUser } = useUsers();
    const [userIdInput, setUserIdInput] = useState<string>('');

    const handleUserIdInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserIdInput(event.target.value);
    };

    const handleButtonClick = () => {
        const userId = parseInt(userIdInput, 10);
        if (!isNaN(userId)) {
            getUserById(userId);
        }
    };

    useEffect(() => {
        setUser(selectedUser);
    }, [selectedUser]);

    return (
        <>
            <h1>USERS</h1>
            <hr />
            <input
                type='number'
                value={userIdInput}
                onChange={handleUserIdInputChange}
                placeholder='Enter User ID'
            />
            <button onClick={handleButtonClick}>Get User</button>
            {user && (
                <div>
                    <h2>Detalles del usuario seleccionado</h2>
                    <p>ID: {user?.id}</p>
                    <p>Nombre: {user?.name}</p>
                </div>
            )}
        </>
    );
};
