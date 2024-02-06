import { User } from '../../../src-generated/openapi';
import { useUsers } from '../../hooks/useUsers';
import SearchBar from '../organisms/SearchBar';
import { Col, Row, Typography } from 'antd';
import UserProfilePage from './UserProfilePage';

interface UsersListProps {}

export const UserListPage: React.FC<UsersListProps> = () => {
    const { users, error, getUserById, selectedUser } = useUsers();
    const { Title } = Typography;

    const handleRowClick = (record: User) => {
        if (record.id !== undefined) {
            getUserById(record.id);
        }
    };

    if (error) {
        return <div>Error al cargar usuarios</div>;
    }
    if (!users) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <Row gutter={16}>
                <Col xs={34} sm={12}>
                    <Title level={2}>User List</Title>
                    <SearchBar users={users} onRowClick={handleRowClick} />
                </Col>
                <Col xs={34} sm={12}>
                    <UserProfilePage user={selectedUser} />
                </Col>
            </Row>
        </>
    );
};
