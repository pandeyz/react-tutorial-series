// Home.js
import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import { APIURL, APITOKEN } from '../config';
const axios = require('axios');

function Home(props) {

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (url=null) => {
    setIsLoading(true);

    let apiUrl = '';
    if( url === null )
    {
      apiUrl = APIURL + 'users';
    }
    else
    {
      apiUrl = url;
    }

    axios.get(apiUrl)
    .then(function (response) {
      setUsers(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      setIsLoading(false);
    });
  }

  const handlePagination = (url) => {
    fetchUsers(url);
  }

  const handleDelete = (userId, userIndex) => {
    axios.delete(`${APIURL}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${APITOKEN}`
      }
    })
    .then(res => {  
      if( res.status === 204 )
      {
        // let usersObj = {...users};
        // usersObj.data.splice(userIndex, 1);
        // setUsers(usersObj);
        fetchUsers();
      }
    });
  }

  const handleEditUser = (userId) => {
    props.history.push(`/user/${userId}`);
  }

  return(
    <div>
      {
        (isLoading)
        ?
        <div>Loading...</div>
        :
        null
      }
      <UserList users={users} handlePagination={handlePagination} handleDelete={handleDelete} handleEditUser={handleEditUser} />
    </div>
  )
}

export default Home;