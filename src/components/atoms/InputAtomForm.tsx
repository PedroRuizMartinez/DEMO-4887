import { Col, Input, Row } from 'antd';

interface InputAtomProps {
    label?: string;
    value: string | number | undefined;
}

const InputAtomForm: React.FC<InputAtomProps> = ({ label, value }) => (
    <Row gutter={[1, 12]} style={{ background: '#f0f0f0', padding: '10px', width: '100%' }}>
        <Col span={23}>
            {label && <label style={{ display: 'block' }}>{label}</label>}
            <Input value={value?.toString()} readOnly />
        </Col>
    </Row>
);

export default InputAtomForm;
