import InputAtom from '../atoms/InputAtom';
import { InputProps } from 'antd';
import { suffixIcon } from '../atoms/IconAtom';
import { useSearchBar } from '../../hooks/useSearchBar';

interface MoleculeSearchBarProps extends InputProps {
    placeholder?: string;
}

const InputSearch: React.FC<MoleculeSearchBarProps> = ({ placeholder, ...props }) => {
    const { searchText, handleSearch } = useSearchBar();

    return (
        <InputAtom
            suffix={suffixIcon}
            placeholder={placeholder}
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            {...props}
        />
    );
};

export default InputSearch;
