import React from 'react'
import { useState } from 'react'
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList'
import ErrorModal from './Components/UI/ErrorModal'

function App() {
  const [allUsers, setAllUsers] = useState([])
  const [errorMessage, setErrorMessage] = useState()

  const closeModalHandler = () => setErrorMessage('')

  const addUserHandler = (userData) => {
    setAllUsers((old) => [userData, ...old])
  }

  const onAddUserError = (data) => {
    setErrorMessage({ ...data })
  }

  return (
    <>
      {errorMessage ? (
        <ErrorModal onCloseModal={closeModalHandler} message={errorMessage} />
      ) : (
        ''
      )}

      <AddUser onAddingUser={addUserHandler} onError={onAddUserError} />

      <UsersList users={allUsers} />
    </>
  )
}

export default App
