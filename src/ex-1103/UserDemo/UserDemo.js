import { useState, useEffect, useCallback } from 'react'
// 需要安裝yarn add axios
import axios from 'axios'
import InputIME from './InputIME'
import _ from 'lodash'
//_代表lodash，$jQuery

function UserDemo() {
  // [{
  //   "id": "107001",
  //   "name": "張佳蓉",
  //   "birth": "990101"
  // }]
  const [users, setUsers] = useState([])

  //搜尋功能
  const [searchWord, setSearchWord] = useState('')

  // 載入資料指示
  const [isLoading, setIsLoading] = useState(false)

  //錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('')

  const getUsers = async () => {
    // 先開啟載入指示器
    setIsLoading(true)

    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      )
      //console.log(response)

      //設定到state裡
      setUsers(response.data)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }

  //搜尋功能
  const getUsersBySearchWord = async (keyword) => {
    // 先開啟載入指示器
    setIsLoading(true)
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?name_like=' +
          keyword
      )
      //設定到state裡
      setUsers(response.data)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }

  // 處理過濾的函式
  const handleSearch = (keyword) => {
    // 檢查，當都沒輸入時回復原本data
    if (keyword === '') {
      getUsers()
      return
    }

    getUsersBySearchWord(keyword)
  }

  // debounce function + useCallback
  // 用途: 當不斷輸入input時，同一時間內要先停止觸發事件，直到輸入停止，400ms為等待時間
  // 使用debounce的主因，是因項目呈現、退場動畫、重新排位動畫三者均需計算與時間
  // 觸發太頻繁時，會造成動畫卡頓或卡住的現象
  const debounceHandleSearch = useCallback(_.debounce(handleSearch, 400), [])

  const handleChange = (e) => {
    // 可控元件綁用state使用
    setSearchWord(e.target.value)

    // 搜尋用 - trim去除空白，toLowerCase轉小寫英文
    const newSearchWord = e.target.value.trim().toLowerCase()

    // 傳至debounceFn中
    debounceHandleSearch(newSearchWord)
  }

  // 延後1秒才關掉指示器
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 800)
    }
  }, [isLoading])

  // didMount時載入資料
  useEffect(() => {
    getUsers()
  }, [])

  const spinner = (
    <>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  )

  const display = errorMessage ? (
    errorMessage
  ) : (
    <div className="bd-example">
      <table className="table table-dark table-striped">
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
  )
  return (
    <>
      <h1>會員資料</h1>
      <hr />
      InputIME+反彈跳(debounce)
      <br />
      <InputIME
        type="text"
        value={searchWord}
        placeholder="輸入名稱過濾搜尋"
        onChange={handleChange}
      />
      <br />
      一般input
      <br />
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          const newSearchWord = e.target.value

          setSearchWord(newSearchWord)

          getUsersBySearchWord(newSearchWord)
        }}
      />
      {/* <button
        onClick={() => {
          setIsLoading(true)

          getUsersBySearchWord()

          // 延後1.5秒才關掉指示器
          setTimeout(() => {
            setIsLoading(false)
          }, 800)
        }}
      >
        搜尋
      </button> */}
      <hr />
      {isLoading ? spinner : display}
    </>
  )
}

export default UserDemo
