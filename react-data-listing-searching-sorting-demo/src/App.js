import React, { useState, useEffect } from 'react';
const axios = require('axios');

const App = () => {

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const [searchString, setSearchString] = useState('');
  const [filteredSortedUsers, setFilteredSortedUsers] = useState([]);
  
  useEffect(() => {
    if( users && users.length > 0 )
    {
      const filteredUsers = !searchString ? users: users.filter(user => new RegExp(searchString, 'i').test(user.name));
      setFilteredSortedUsers(filteredUsers);
    }
  }, [searchString, users]);

  const [sortColumns, setSortColumns] = useState({id: 'asc', name: 'asc'});
  const handleSort = (columnName) => {
    let sorting = {...sortColumns};
    sorting[columnName] = ( sorting[columnName] === 'asc' ) ? 'desc': 'asc';
    setSortColumns(sorting);

    if( columnName === 'id' )
    {
      if( sorting[columnName] === 'asc' )
      {
        filteredSortedUsers.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
      }
      else
      {
        filteredSortedUsers.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0));
      }
    }
    else if( columnName === 'name' )
    {
      if( sorting[columnName] === 'asc' )
      {
        filteredSortedUsers.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      }
      else
      {
        filteredSortedUsers.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
      }
    }
  }

  return (
    <div style={{ margin: 20 }}>
      <div className="pull-right">
        <input type="text" placeholder="Search..." onChange={(event) => setSearchString(event.target.value)} />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: '5%', cursor: 'pointer' }} onClick={() => handleSort('id')}>Id 
              <span className={`glyphicon ${ ( sortColumns.id === 'asc' ) ? 'glyphicon-arrow-up': 'glyphicon-arrow-down' }`}></span>
            </th>
            <th style={{ width: '20%', cursor: 'pointer' }} onClick={() => handleSort('name')}>Name 
              <span className={`glyphicon ${ ( sortColumns.name === 'asc' ) ? 'glyphicon-arrow-up': 'glyphicon-arrow-down' }`}></span>
            </th>
            <th style={{ width: '20%' }}>Email</th>
            <th style={{ width: '20%' }}>Phone</th>
            <th style={{ width: '35%' }}>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            ( filteredSortedUsers.length > 0 )
            ?
            filteredSortedUsers.map(user => {
              /* To delete an extra key from object */
              let userAddress = {...user.address};
              delete userAddress.geo;

              return(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{Object.values(userAddress).join(', ')}</td>
                </tr>
                )
              }
            )
            :
            <tr style={{ textAlign: 'center' }}><td colSpan="5">No data found</td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}
 
export default App;