import React from 'react';

function UserList(props) {

  let { users, handlePagination, handleDelete, handleEditUser } = props;

  const handlePaginationClick = (event, url) => {
    event.preventDefault();
    handlePagination(url);
  }

  const handleDeleteUser = (userId, userIndex) => {
    handleDelete(userId, userIndex);
  }

  return (
    <React.Fragment>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            ( users.data && users.data.length > 0 )
            ?
            users.data.map((user, userIndex) => 
              <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
              <td>
                <button type="button" className="btn btn-default btn-sm" onClick={() => handleEditUser(user.id)}>
                  <span className="glyphicon glyphicon-edit"></span>
                </button>
                <button type="button" className="btn btn-default btn-sm" onClick={() => handleDeleteUser(user.id, userIndex)}>
                  <span className="glyphicon glyphicon-trash"></span> 
                </button>
              </td>
            </tr>  
            )
            :
            <tr>
              <td colSpan="6">No data found</td>
            </tr>
          }
        </tbody>
      </table>
      {
        ( users && users.meta )
        ?
        <div style={{ textAlign: 'right' }}>
          <nav>
            <ul className="pagination">
              <li className="page-item" disabled={(users.meta.pagination.links.previous === null)}>
                {
                  (users.meta.pagination.links.previous === null)
                  ?
                  <span className="page-link">Prev</span>
                  :
                  <a className="page-link" href="#" onClick={(event) => handlePaginationClick(event, users.meta.pagination.links.previous)}>Prev</a>
                }
              </li>
              <li className="page-item"><a className="page-link" href="#" onClick={(event) => handlePaginationClick(event, users.meta.pagination.links.next)}>Next</a></li>
            </ul>
          </nav>
        </div>
        :
        null
      }
    </React.Fragment>
  );
}

export default UserList;
