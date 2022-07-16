import React, { useState } from 'react'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
const AddUserForm = (props) => {
  const [formData, setFormData] = useState({ userAge: 0, userName: '' })

  const updateFormData = (e) => {
    const { name, value, type } = e.target
    // create a new object with a new id
    const newObj = {
      [name]: type === 'number' ? +value : value,
      id: new Date().getTime().toString(),
    }
    // update the state
    setFormData((old) => ({ ...old, ...newObj }))
  }

  const submitFormHandler = (e) => {
    e.preventDefault()
    if (formData.userName.trim().length === 0) {
      props.onError({
        title: 'Invalid name',
        message: `This is an invalid name`,
      })
      return
    }

    if (+formData.userAge < 1) {
      props.onError({
        title: 'Invalid Age',
        message: `Age must be greater than 0!!`,
      })
      return
    }

    props.onAddingUser(formData)
    // resetting form inputs
    setFormData({ userAge: '', userName: '' })
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            name='userName'
            value={formData.userName}
            onChange={updateFormData}
          />

          <label htmlFor='userAge'>Age</label>
          <input
            id='userAge'
            type='number'
            max={99}
            name='userAge'
            value={formData.userAge}
            onChange={updateFormData}
          />
        </div>

        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUserForm
