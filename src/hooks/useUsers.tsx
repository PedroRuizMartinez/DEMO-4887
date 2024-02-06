import { useState } from 'react';
import { DefaultApiFactory, User } from '../../src-generated/openapi';
import { getAllUsers } from '../utils/api';
import { getApiConfig } from '../utils/api';
import useSWR from 'swr';

export const useUsers = () => {
    const [selectedUser, setSelectedUser] = useState<User | undefined>();
    const { data: users, error, mutate } = useSWR('/users', getAllUsers);

    const getUserById = async (id: number) => {
        try {
            const conf = DefaultApiFactory(getApiConfig('/users/${id}'));
            const response = await conf.usersUserIdGet(id);
            setSelectedUser(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching user by id:', error);
        }
    };

    const handleUserSelection = (user: User | undefined) => {
        setSelectedUser(user);
    };

    return { users, getUserById, selectedUser, mutate, error, handleUserSelection };
};
