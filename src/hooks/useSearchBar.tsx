import { useState } from 'react';

export const useSearchBar = () => {
    const [searchText, setSearchText] = useState<string>('');

    const handleSearch = (selectedKey: string) => {
        setSearchText(selectedKey);
    };
    return { searchText, handleSearch, setSearchText };
};
