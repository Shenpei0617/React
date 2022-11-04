import { useState, useEffect, useCallback } from 'react'
// 需要安裝yarn add axios
import axios from 'axios'

import InputIME from './InputIME'
import _ from 'lodash'

function UserPage() {
  // [{
  //   "id": "107001",
  //   "name": "張佳蓉",
  //   "birth": "990101"
  // }]
  // 記錄原始資料用
  const [users, setUsers] = useState([])

  // 呈現分頁資料用
  const [usersDisplay, setUsersDisplay] = useState([])

  const [searchWord, setSearchWord] = useState('')

  // 載入資料指示，true代表正在載入資料
  const [isLoading, setIsLoading] = useState(false)

  // 錯誤訊息用
  const [errorMessage, setErrorMessage] = useState('')

  // 分頁
  // 目前頁號。最小必為1，最大是看計算出最大頁數
  const [pageNow, setPageNow] = useState(1)
  // 每頁多少筆資料
  const [perPage, setPerPage] = useState(5)
  // 總共多少頁。在資料進入後(didMount)後需要計算出後決定
  const [pageTotal, setPageTotal] = useState(0)

  const getUsers = async () => {
    // 先開啟載入指示器
    setIsLoading(true)

    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      )
      console.log(response.data)

      // 依每頁多少筆，對所有得到資料進行分塊處理
      const pageList = _.chunk(response.data, perPage)

      console.log(pageList)

      if (pageList.length > 0) {
        setPageTotal(pageList.length)
        // 記錄分塊後的資料
        setUsersDisplay(pageList)
        //設定到state裡
        setUsers(response.data)
      }
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      setErrorMessage(e.message)
    }
  }

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

  // 延後1.5秒才關掉指示器
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }, [isLoading])

  // didMount時載入資料
  useEffect(() => {
    getUsers()
  }, [])

  const paginationBar = (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            href="#/"
            onClick={() => {
              setPageNow(1)
            }}
          >
            第一頁
          </a>
        </li>
        {Array(pageTotal)
          .fill(1)
          .map((v, i) => {
            return (
              <li class="page-item">
                <a
                  class="page-link"
                  href="#/"
                  onClick={() => {
                    setPageNow(i + 1)
                  }}
                >
                  {i + 1}
                </a>
              </li>
            )
          })}
        <li class="page-item">
          <a
            class="page-link"
            href="#/"
            onClick={() => {
              setPageNow(pageTotal)
            }}
          >
            最後頁
          </a>
        </li>
      </ul>
    </nav>
  )

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
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
        </tr>
      </thead>
      <tbody>
        {usersDisplay.length > 0 &&
          usersDisplay[pageNow - 1].map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )

  return (
    <>
      <h1>會員資料 - 分頁</h1>
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
      一般input+按鈕
      <br />
      <input
        type="text"
        value={searchWord}
        onChange={(e) => {
          const newSearchWord = e.target.value
          setSearchWord(newSearchWord)
        }}
      />
      <button
        onClick={() => {
          getUsersBySearchWord(searchWord)
        }}
      >
        搜尋
      </button>
      <hr />
      {isLoading ? spinner : display}
      {paginationBar}
    </>
  )
}

export default UserPage
