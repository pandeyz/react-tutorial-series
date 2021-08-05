import React from 'react';

function ListUsers(props) {

  const { users, handleDeleteUser, handleEditUser } = props;

  return (
    <div>
      <div style={{ textAlign: 'center' }}><h4>List Users</h4></div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            ( users.length > 0 )
            ?
            users.map((user, index) => 
              <tr key={index}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{(user.gender)}</td>
                <td>
                  <button type="button" className="btn btn-default btn-sm" onClick={() => handleEditUser(index)}>
                    <span className="glyphicon glyphicon-edit"></span>
                  </button>
                  <button type="button" className="btn btn-default btn-sm" onClick={() => handleDeleteUser(index)}>
                    <span className="glyphicon glyphicon-trash"></span>
                  </button>
                </td>
              </tr>
            )
            :
            <tr style={{ textAlign: 'center' }}><td colSpan={5}>No user found!!</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default ListUsers;