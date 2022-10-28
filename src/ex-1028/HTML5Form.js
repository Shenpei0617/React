//各種可控的表單元件

import { useState } from 'react'

function HTML5Form() {
  const [inputText, setInputText] = useState('')
  const [textAreaText, setTextAreaText] = useState('')

  //單一的checkbox
  const [agree, setAgree] = useState(false)

  // radio group
  // 記錄使用者選了哪個值
  const [gender, setGender] = useState('')
  const genderOptions = ['男', '女', '不提供']

  // select下拉選單的選項建立
  const [pet, setPet] = useState('')
  const petOptions = ['狗', '貓', '金魚']

  //checkbox grop選項建立
  const [fruit, setFruit] = useState('')
  const fruitOptions = ['芒果', '蘋果', '香蕉']

  return (
    <>
      <h1>文字輸入框(input-text)</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />

      <h1>文字輸入框(textarea)</h1>
      <textarea
        type="text"
        value={textAreaText}
        onChange={(e) => {
          setTextAreaText(e.target.value)
        }}
      />

      <h1>核取方塊(checkbox)</h1>
      <input
        type="checkbox"
        value={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label>我同意會員註冊條款</label>

      <h1>選項按鈕群組(radio group)</h1>
      {genderOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              checked={gender === v}
              value={v}
              onChange={(e) => {
                setGender(e.target.value)
              }}
            />
            <label>{v}</label>
          </div>
        )
      })}

      <h1>下拉式選單(select)</h1>
      <select
        value={pet}
        onChange={(e) => {
          setPet(e.target.value)
        }}
      >
        <option value="">---請選擇---</option>
        {/* 預設值 */}
        {petOptions.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>

      <h1>核取方塊群組(checkbox group)</h1>
      {fruitOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={fruit.includes(v)}
              value={v}
              onChange={(e) => {
                const fruitValue = e.target.value

                if (fruit.includes(fruitValue)) {
                  //如果此項目值在state陣列中 -> 移出state陣列
                  const inFruit = fruit.filter((v2, i2) => v2 !==  fruitValue)
                  setFruit(inFruit)
                } else {
                  //如果不在此state陣列中 ->就加入state陣列
                  const noFruit = [...fruit,  fruitValue]
                  setFruit(noFruit)
                }
              }}
            />
            <label>{v}</label>
          </div>
        )
      })}
    </>
  )
}
export default HTML5Form
