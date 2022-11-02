import { useState, useEffect } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  // 模擬didmount
  useEffect(() => {
    console.log('模擬didmount')
  }, [])
  //!!相依性陣列

  // 模擬didMount + didUpdate
  useEffect(() => {
    // 當total狀態有改變時，執行這裡的程式碼
    console.log('模擬didUpdate')
  }, [total])

  // 模擬didUpdate，用if控制避開初始值
  useEffect(() => {
    // 當total狀態有改變時，執行這裡的程式碼
    if (total !== 0) {
      console.log('模擬didUpdate(避開初始值)')
    }
  }, [total])
  // 模擬 willUnmount
  useEffect(() => {
    return () => {
      console.log('模擬 willUnmount')
    }
  }, [])

  return (
    <>
      {console.log('render')}
      <h1>函式型元件</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
