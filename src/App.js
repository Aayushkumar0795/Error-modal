import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);


  const addUserHandler = (inputName, inputAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      {
        id: Math.random(),
        name: inputName,
        age: inputAge
      }
    ])
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
