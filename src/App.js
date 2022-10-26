// import Counter from './ex-1025/Counter'
//import JsxValue from './ex-1026/JsxValue'
// import StudentList from "./ex-1026/StudentList"
import { useState } from 'react'
import { examples } from './ex-1026/examples'

function App() {
  const [displayIndex, setDisplayIndex] = useState(0)
  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        setDisplayIndex(Number(e.target.value))
      }}
    >
      {examples.map((v, i) => {
        return (
          <option key={i} value={i}>
            {v.name}
          </option>
        )
      })}
    </select>
  )
  //建立動態元件，動態元件語法，注意命名開頭英文一定要大寫
  const MyComponent = examples[displayIndex].component
  // MyComponent=examples裡面選到的索引值，的component裡面設定的內容
  return (
    <>
      {selection}
      <hr />
      <MyComponent />
    </>
  )
}
export default App
