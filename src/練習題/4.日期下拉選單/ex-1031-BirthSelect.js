//練習題:生日下拉式選單
//1.設定表單樣式，用for迴圈增加日期(makeOptions)
//2.將選到的日期帶進資料庫  setYear(e.target.value)
//3.把日期的31天換成new Date(year, month, 0).getDate() 判斷幾月有幾天
//4.加入判斷沒選年不能選月，沒選月不能選日 year !=='' && month !=='' && makeOptions
//5.在button加入18年、使用者生日、目前時間微秒值，判斷是否滿18歲
//6.判斷是否有選擇日期，沒有選擇中止程式繼續執行
//7.顯示判斷結果是否滿18，未滿18呈現紅色，滿18綠色

import { useState } from 'react'
import './BirthSelect.css'

function BirthSelect() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [text18, setText18] = useState('')

  //用for迴圈產生日期
  const makeOptions = (min, max) => {
    const options = []
    for (let i = min; i < max + 1; i++) {
      options.push(i)
    }
    return options
  }

  return (
    <>
      <span>
        西元
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value)
          }}
        >
          <option value="">請選擇</option>
          {makeOptions(1920, 2022).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
        年
      </span>
      <span>
        <select
          value={month}
          onChange={(e) => {
            setMonth(e.target.value)
          }}
        >
          <option value="">請選擇</option>
          {makeOptions(1, 12).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </span>
      月
      <span>
        <select
          value={day}
          onChange={(e) => {
            setDay(e.target.value)
          }}
        >
          <option value="">請選擇</option>
          {/*判斷 當 年+月 沒選好時，不能選日 */}
          {year !== '' &&
            month !== '' &&
            makeOptions(1, new Date(year, month, 0).getDate()).map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              )
            })}
        </select>
      </span>
      日
      <br />
      <button
        onClick={() => {
          //判斷是否有選擇日期，沒有選擇中止程式繼續執行，常用！
          if (year === '' || month === '' || day === '') {
            alert('請先完成年月日選擇')
            return
          }
          //18年的微秒值
          const ms18years = 568036800000

          //使用者生日的微秒值
          const msBirth = Number(new Date(`${year}/${month}/${day}`))

          //目前時間的微秒值
          const msNow = Number(new Date())

          //判斷是否滿18
          if (msNow - msBirth > ms18years) {
            setText18('滿18歲')
          } else {
            setText18('未滿18歲')
          }
        }}
      >
        檢查是否滿18歲
      </button>
      <hr />
      <p className={text18 === '滿18歲' ? 'over18' : 'not-over18'}>{text18}</p>
    </>
  )
}

export default BirthSelect
