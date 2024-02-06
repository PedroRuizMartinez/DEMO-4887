import React from 'react';
import UserProfileOrganism from '../organisms/UserProfileOrganism';
import { User } from '../../../src-generated/openapi/api';

interface UserProfileProps {
    user: User | undefined;
}

const UserProfilePage: React.FC<UserProfileProps> = ({ user }) => {
    return <UserProfileOrganism user={user} />;
};

export default UserProfilePage;
