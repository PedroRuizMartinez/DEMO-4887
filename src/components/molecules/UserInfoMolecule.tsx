import InputAtomForm from '../atoms/InputAtomForm';
import { Col, Row } from 'antd';
import { User } from '../../../src-generated/openapi';

interface UserInfoMoleculeProps {
    user: User | undefined;
}

const UserInfoMolecule: React.FC<UserInfoMoleculeProps> = ({ user }) => (
    <div style={{ border: '10px solid #ccc', borderRadius: '10px', padding: '10px' }}>
        <Row>
            <Col span={12}>
                <InputAtomForm label='ID' value={user?.id} />
            </Col>
            <Col span={12}>
                <InputAtomForm label='Email' value={user?.email} />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <InputAtomForm label='Name' value={user?.name} />
            </Col>
            <Col span={12}>
                <InputAtomForm label='Username' value={user?.username} />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <InputAtomForm label='Phone' value={user?.phone} />
            </Col>
            <Col span={12}>
                <InputAtomForm label='Website' value={user?.website} />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <InputAtomForm label='Street' value={user?.address?.street} />
            </Col>
            <Col span={12}>
                <InputAtomForm label='City' value={user?.address?.city} />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <InputAtomForm label='Latitude' value={user?.address?.geo?.lat} />
            </Col>
            <Col span={12}>
                <InputAtomForm label='Longitude' value={user?.address?.geo?.lng} />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <InputAtomForm label='Company' value={user?.company?.name} />
            </Col>
            <Col span={12}>
                <InputAtomForm label='Catch Phrase' value={user?.company?.catchPhrase} />
            </Col>
        </Row>
    </div>
);

export default UserInfoMolecule;
