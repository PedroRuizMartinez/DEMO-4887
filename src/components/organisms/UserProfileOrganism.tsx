import React from 'react';
import UserInfoMolecule from '../molecules/UserInfoMolecule';
import { User } from '../../../src-generated/openapi/api';
import { Typography } from 'antd';

interface UserProfileOrganismProps {
    user: User | undefined;
}

const UserProfileOrganism: React.FC<UserProfileOrganismProps> = ({ user }) => {
    const { Title } = Typography;

    return (
        <div>
            <Title level={2}>User Profile</Title>
            <UserInfoMolecule user={user} />
        </div>
    );
};

export default UserProfileOrganism;
