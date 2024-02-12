import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './userList';
import UserDetails from './userDetails'; // Import UserDetails component
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetails />} /> {/* UserDetails component does not need users prop */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
