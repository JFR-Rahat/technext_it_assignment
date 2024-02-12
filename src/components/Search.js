export const Search = (users, filteredUsers, setFilteredUsers) => {

    const filterItems = (searchTerm) => {
        const filteredItems = users.filter((user) => {
            const name = `${user.firstName} ${user.lastName}`;
            return name.toLowerCase().includes(searchTerm.toLowerCase())
        });

        setFilteredUsers(filteredItems);
    }

    return { filterItems, filteredUsers };
}