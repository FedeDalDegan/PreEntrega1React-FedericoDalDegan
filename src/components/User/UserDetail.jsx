import React, { useContext } from 'react'
import UserContext from '../../context/userContext/userContext'

const UserDetail = () => {

    const {user, editUser} = useContext(UserContext)
    console.log(user)

    const changeName = (e) => {
        editUser(e.target.value, user.age)
    }

  return (
    <div>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <input type="text" value={user.name} onChange={changeName} />
    </div>
  )
}

export default UserDetail
