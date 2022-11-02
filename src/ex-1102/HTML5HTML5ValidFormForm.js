import { useState } from 'react'

function HTML5HTML5ValidFormForm() {
  //   const [username, setUsername] = useState('')
  //   const [password, setPassword] = useState('')

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 記錄欄位有錯誤時的訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
    email: '',
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
  const handleFormSubmit = (e) => {
    // 阻擋預設form送出的行為
    e.preventDefault()

    // 得到輸入值的方式
    // 第1種，從state直接得到
    console.log(user)

    // 第2種，用FormData物件
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('email'),
      formData.get('password')
    )

    // 其它驗証…修改

    // 送到伺服器
  }
  const handleFormInvalid = (e) => {
    // 阻擋submit預設行為 - 關閉泡泡訊息
    e.preventDefault()
    //console.log(e.target.name, e.target.validationMessage)

    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  // 當使用者回頭修正欄位時，要把表單的錯誤訊息先清空
  const handleFormChange = (e) => {
    setFieldErrors({
      //要把目前正在修改的欄位的錯誤訊息先清空
      ...fieldErrors,
      [e.target.name]: '',
    })
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        onInvalid={handleFormInvalid}
        onChange={handleFormChange}
      >
        {/* onInvalid 當表單驗證錯誤時觸發 */}
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleFieldChange}
          required
        />
        <span>{fieldErrors.username}</span>
        <br />
        <label>信箱</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleFieldChange}
          required
        />
        <span>{fieldErrors.email}</span>
        <br />
        <label>密碼</label>
        <input
          type={show ? 'text' : 'password'}
          name="password"
          value={user.password}
          onChange={handleFieldChange}
          required
        />
        <span>{fieldErrors.password}</span>
        <input
          type="checkbox"
          name="show"
          checked={show}
          onChange={() => {
            setShow(!show)
          }}
        />
        <label>顯示密碼</label>
        <br />
        <button type="submit">送出</button>
        {/* 沒加 type 相當於 type="submit" */}
        <button
          type="button"
          onClick={() => {
            setUser({
              username: 'eddy123',
              email: 'test@gmail.com',
              password: '123456',
            })
          }}
        >
          填入資料
        </button>
      </form>
    </>
  )
}

export default HTML5HTML5ValidFormForm
