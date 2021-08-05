import React, { useState, useEffect } from 'react';

function AddUser(props) {

  const { handleAddUser, userDetails } = props;
  const [user, setUser] = useState({fname: 'Ashu', lname: 'Singh', email: 'ashu@email.com', gender: 'Male'});

  const handleUserInput = (event) => {
    let existUser = {...user};
    existUser[event.target.name] = event.target.value;
    setUser(existUser);
  }

  useEffect(() => {
    if( userDetails )
    {
      setUser(userDetails);
    }
  }, [userDetails]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if( user.fname && user.lname && user.email && user.gender )
    {
      // Send the user object to parent component
      handleAddUser(user);

      // Flush the form inputs
      setUser({fname: '', lname: '', email: '', gender: ''});
    }
    else
    {
      alert('Please fill all the inputs');
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Add User</h4>
      <form className="form-inline" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" className="form-control" name="fname" onChange={handleUserInput} value={user.fname} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" className="form-control" name="lname" onChange={handleUserInput} value={user.lname} />
        </div>
        <div className="form-group">
          <label>Email address:</label>
          <input type="email" className="form-control" name="email" onChange={handleUserInput} value={user.email} />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select className="form-control" name="gender" onChange={handleUserInput} value={user.gender}>
            <option value="">Select</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">{(userDetails) ? 'Update User': 'Add User'}</button>
      </form>
    </div>
  );
}

export default AddUser;