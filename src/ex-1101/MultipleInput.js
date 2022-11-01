import { useState } from 'react'

function MultipleInput() {
  //   const [username, setUsername] = useState('')
  //   const [password, setPassword] = useState('')

  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    //console.log(e.target.type, e.target.name, e.target.value)
    // computed property name
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  return (
    <>
      <label>帳號</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleFieldChange}
      />
      <br />
      <label>密碼</label>
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={handleFieldChange}
      />
    </>
  )
}

export default MultipleInput