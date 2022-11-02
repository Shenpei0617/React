import { useState, useEffect } from 'react'
// 需要安裝yarn add axios
import axios from 'axios'
function User() {
  // [{
  //   "id": "107001",
  //   "name": "張佳蓉",
  //   "birth": "990101"
  // }]
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )
    console.log(response)

    //設定到state裡
    setUsers(response.data)
  }

  // didMount時載入資料
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h1>會員資料</h1>
      <div class="bd-example">
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">姓名</th>
            </tr>
          </thead>
          <tbody>
            {users.map((v, i) => {
              return (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default User
