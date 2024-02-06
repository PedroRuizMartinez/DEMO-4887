import React, { useState } from 'react';
import InputSearch from '../molecules/InputSearch';
import UserTable from '../molecules/UserTable';
import { User } from '../../../src-generated/openapi/api';

const SearchBar: React.FC<{ users: User[]; onRowClick: (record: User) => void }> = ({
    users,
    onRowClick,
}) => {
    const [searchText, setSearchText] = useState<string>('');

    const handleSearch = (selectedKey: string) => {
        setSearchText(selectedKey);
    };

    const handleRowClick = (record: User) => {
        onRowClick(record);
    };

    return (
        <div>
            <InputSearch
                placeholder='Busca un usuario'
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <UserTable
                data={users.filter((item) =>
                    Object.values(item)
                        .map((value) => value.toString().toLowerCase())
                        .some((value) => value.includes(searchText.toLowerCase()))
                )}
                onRowClick={handleRowClick}
            />
        </div>
    );
};

export default SearchBar;
