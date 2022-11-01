import { useState } from 'react'

function MultipleInput() {
  //   const [username, setUsername] = useState('')
  //   const [password, setPassword] = useState('')

  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  // true = 呈現密碼 / false = 隱藏密碼
  const [show, setShow] = useState(false)

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
        type={show ? 'text' : 'password'}
        name="password"
        value={user.password}
        onChange={handleFieldChange}
      />
      <input
        type="checkbox"
        name="show"
        checked={show}
        onChange={() => {
          setShow(!show)
        }}
      />
      <label>顯示密碼</label>
    </>
  )
}

export default MultipleInput
