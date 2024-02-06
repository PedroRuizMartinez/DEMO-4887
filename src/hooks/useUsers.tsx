import { useState } from 'react';
import { DefaultApiFactory, User } from '../../src-generated/openapi';
import { getAllUsers, getApiConfig } from '../utils/api';
import useSWR from 'swr';
import { App } from 'antd';

export const useUsers = () => {
    const [selectedUser, setSelectedUser] = useState<User | undefined>();
    const { data: users, error, mutate } = useSWR('/users', getAllUsers);
    const { notification } = App.useApp();

    const getUserById = async (id: number) => {
        try {
            const conf = DefaultApiFactory(getApiConfig('/users/${id}'));
            const response = await conf.userGetById(id);
            setSelectedUser(response.data);
            return response.data;
        } catch (error) {
            notification.error({ message: 'Error al recuperar el registro' });
            console.error(error);
        }
    };

    return { users, getUserById, selectedUser, mutate, error };
};
