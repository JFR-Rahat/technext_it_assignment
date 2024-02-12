import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
    const location = useLocation();
    const {user} = location?.state;

  return (
    <div className="container mx-auto d-flex justify-content-center">
      <div className="row pt-4">
      <h2 className="text-center">User Details</h2>
      {user ? (
        <div className="col">
          <img className="mx-auto d-flex justify-content-center" src={user.image} alt="Avatar" />
          <div className="text-center">
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address.address}, {user.address.city}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        </div>
      ) : (
        <p>User not found!</p>
      )}
    </div>
    </div>
  );
};

export default UserDetails;
