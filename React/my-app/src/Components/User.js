import React from 'react'

const User = () => {
    const user = {
        name: "leela",
        email: "manoharjunga@gmail.com"
    }
  return (
    <div>
        <p>name: {user.name}</p>
        <p>email: {user.email}</p>
    </div>
  )
}

export default User