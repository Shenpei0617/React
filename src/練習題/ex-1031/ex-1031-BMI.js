import { useState } from 'react'

function BMI() {
  const [myHeight, setMyHeight] = useState(0)
  const [myWeight, setMyWeight] = useState(0)
  const [myBmi, setMyBmi] = useState(0)

  return (
    <>
      <div>
        身高：
        <input
          type="number"
          value={myHeight === 0 ? '' : myHeight}
          placeholder="請輸入身高"
          onChange={(e) => {
            setMyHeight(Number(e.target.value))
            //e.target.value會把數質變成字串，為了保持資料一致性所以要轉成字串
          }}
        />
      </div>
      <div>
        體重：
        <input
          type="number"
          value={myWeight === 0 ? '' : myWeight}
          placeholder="請輸入體重"
          onChange={(e) => {
            setMyWeight(Number(e.target.value))
          }}
        />
      </div>
      <button
        onClick={() => {
          if (myWeight < 10 || myHeight < 100) {
            alert('身高或體重有錯誤，請重新輸入')
            return
          }
          setMyBmi(myWeight / Math.pow(myHeight / 100, 2))
        }}
      >
        計算
      </button>
      <hr />
      {/* toFixed(1)格式化數字用，保留一位小數之後四捨五入 */}
      <p>你的BMI：{myBmi.toFixed(1)}</p>
    </>
  )
}

export default BMI
