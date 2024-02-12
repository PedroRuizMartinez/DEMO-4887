import { User } from '../../../src-generated/openapi';
import { useUsers } from '../../hooks/useUsers';
import SearchBar from '../organisms/SearchBar';
import { Col, Row, Typography } from 'antd';
import UserProfilePage from './UserProfilePage';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { url_users } from '../../routes';

interface UsersListProps {}

interface Params {
    [key: string]: string | undefined;
}

export const UserListPage: React.FC<UsersListProps> = () => {
    const { users, error, getUserById, selectedUser } = useUsers();
    const { Title } = Typography;
    const { id } = useParams<Params>();
    const navigate = useNavigate();

    useEffect(() => {
        id && getUserById(parseInt(id));
    }, [getUserById, id]);

    const handleRowClick = (record: User) => {
        navigate(`${url_users}/${record.id}`);
    };

    return (
        <>
            {error && <div>Error al cargar usuarios</div>}
            {!users && <div>Cargando...</div>}
            <Row gutter={16}>
                <Col xs={34} sm={12}>
                    <Title level={2}>User List</Title>
                    <SearchBar users={users || []} onRowClick={handleRowClick} />
                </Col>
                <Col xs={34} sm={12}>
                    <UserProfilePage user={selectedUser} />
                </Col>
            </Row>
        </>
    );
};
