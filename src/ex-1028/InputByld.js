import React from 'react'
//用ID帶入資料，元件為不可重複利用
function InputById() {
  return (
    <>
      <input type="text" id="email" />
      <button
        onClick={() => {
          document.getElementById('email').value = 'test@gmail.com'
        }}
      >
        載入資料
      </button>
    </>
  )
}

export default InputById