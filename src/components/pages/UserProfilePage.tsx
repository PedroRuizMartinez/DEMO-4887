import React from 'react';
import UserProfileOrganism from '../organisms/UserProfileOrganism';
import { User } from '../../../src-generated/openapi/api';

interface UserProfilePageProps {
    user: User | undefined;
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({ user }) => {
    return <UserProfileOrganism user={user} />;
};

export default UserProfilePage;
