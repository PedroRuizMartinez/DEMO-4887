import { Input, InputProps } from 'antd';

interface AtomInputProps extends InputProps {
    suffix?: React.ReactNode;
}

const InputAtom: React.FC<AtomInputProps> = ({ suffix, ...props }) => {
    return (
        <Input
            style={{ width: '100%', marginBottom: '10px' }}
            allowClear
            suffix={suffix}
            {...props}
        />
    );
};

export default InputAtom;
