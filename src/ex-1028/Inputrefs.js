import { useRef } from 'react'
//Refs會在React自動指派一個類ID，所以為可復利用，通常用於地圖、圖表、動畫、DOM處理
function InputByRefs() {
  //{ current: null }會記載React內部
  const inputRef = useRef(null)

  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = 'test@gmail.com'
        }}
      >
        載入資料
      </button>
    </>
  )
}

export default InputByRefs