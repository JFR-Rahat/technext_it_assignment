import React, { useState, useEffect } from 'react';
import { fetchUsers } from './api';
import AddUserForm from './components/AddUserForm';
import { Search } from './components/Search';
import { Sort } from './components/Sort';
import DisplayUsers from './components/DisplayUsers';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [sortCategory, setSortCategory] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data.users);
      setFilteredUsers(data.users);
    };
    getUsers();
  }, []);

  const filtered = Search(users, filteredUsers, setFilteredUsers);
  const {filterItems} = filtered

  const handleSearch = (e)=>{
        setSearchValue(e.target.value)
        filterItems && filterItems(e.target.value)
  }

  const sortedResult = Sort(users, sortCategory, setSortCategory)

  return (
    <div className="container">
        <div className="row pt-4">
            <div className="col-md-9">
                <h2 className="text-center">User List</h2>
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <input type='text' placeholder='Search User'value={searchValue} onChange={handleSearch}/>
                        <select onChange={e => setSortCategory(e.target.value)} className="form-select w-25">
                        <option value="">Choose Sort Category</option>
                        <option value="sort_by_name">Sort by Name</option>
                        <option value="sort_by_email">Sort by Email</option>
                        <option value="sort_by_company_name">Sort by Company Name</option>
                    </select>
                    </div>
                    <DisplayUsers filteredUsers={(filtered?.filteredUsers.length < users.length) ? filtered?.filteredUsers : sortedResult?.data} />
                </div>
            </div>
            <div className="col-md-3">
                <AddUserForm></AddUserForm>
            </div>
        </div>
    </div>
  );
};

export default UserList;
