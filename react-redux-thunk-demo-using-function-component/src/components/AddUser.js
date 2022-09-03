import React, { useState } from 'react';
import { addUser } from '../actions';

import { useDispatch } from 'react-redux';

function AddUser() {
  const dispatch = useDispatch();

  // To handle form submit
  const [user, setUser] = useState({ name: '', phone: '', website: '' });
 const handleSubmit = (event) => {
      event.preventDefault();

      // Call the reducer
      if( user.name === '' || user.phone === '' || user.website === '' )
      {
          alert('All fields are mandatory');
          return false;
      }

      dispatch(addUser(user));

      // Reset the values
      setUser({ name: '', phone: '', website: '' });
  }

  // To handle user input and set the value in local state
  const handleInput = (event) => {
      let existingUser = {...user};
      existingUser[event.target.name] = event.target.value;
      setUser(existingUser);
  }

  return (
    <div>
      <div className="text-center"><h4>Add User</h4></div>
      <form className="form-inline" autoComplete="off" onSubmit={ handleSubmit } autoComplete="off">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" className="form-control" name="name" onChange={ handleInput } value={ user.name } />
        </div>
        <div className="form-group" style={{ marginLeft: 60 }}>
          <label htmlFor="name">Phone No:</label>
          <input type="text" className="form-control" name="phone" onChange={ handleInput } value={ user.phone } />
        </div>
        <div className="form-group" style={{ marginLeft: 60 }}>
          <label htmlFor="department">Website:</label>
          <input type="text" className="form-control" name="website" onChange={ handleInput } value={ user.website } />
        </div>
        <button style={{ marginLeft: 60 }} type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  )
}

export default AddUser;