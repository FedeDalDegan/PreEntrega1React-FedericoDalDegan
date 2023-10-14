import React from 'react'
import { useState } from 'react'
import userContext from "../userContext/userContext"

const userContextProvider = ({children}) => {

  const [user, setUser] = useState({
    name: "FonohA",
    age: 45
  })

  const editUser = (newName, newAge) => {
    setUser({
      name: newName,
      age: newAge,
    })
  }

  const value = {
    user,
    editUser
  }

  return (
    <userContext.Provider value={value}>
        {children}
    </userContext.Provider>
  )
}

export default userContextProvider

