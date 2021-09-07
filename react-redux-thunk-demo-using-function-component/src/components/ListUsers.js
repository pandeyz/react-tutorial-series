import React, { useEffect } from 'react';
import { deleteUser, fetchUsers } from '../actions';

import { useSelector, useDispatch } from 'react-redux';

function ListUser() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleDelete = (id) => {
    if( window.confirm('Are you sure?') )
    {
      dispatch(deleteUser(id));
    }
  }

  return (
    <div>
      <hr />
      <div className="text-center"><h4>List Users</h4></div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          ( users.length > 0 )
          ?
          users.map((user, index) => (<tr key={ index }>
            <td>{ index + 1 }</td>
            <td>{ user.name }</td>
            <td>{ user.phone }</td>
            <td>{ user.website }</td>
            <td style={{ width: '5%' }}><span style={{ cursor: 'pointer' }} onClick={ () => handleDelete(index) } className="glyphicon glyphicon-trash"></span></td>
          </tr>))
          :
          <tr><td colSpan="5" className="text-center">No record found</td></tr>
        }
        </tbody>
      </table>
    </div>
  )
}

export default ListUser;