import { DefaultApiFactory, Configuration } from '../../src-generated/openapi';

export const getApiConfig = (apiKey: string): Configuration => {
    return {
        basePath: 'https://jsonplaceholder.typicode.com',
        apiKey: apiKey,
    } as Configuration;
};

export const getAllUsers = async () => {
    const configRequest = DefaultApiFactory(getApiConfig('allUsers'));
    const response = await configRequest.usersGetAll();
    return response.data || [];
};
