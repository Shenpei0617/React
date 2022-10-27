import { useState } from 'react'

function ChildB(props) {
  const [childBData, setChildBData] = useState('child B data 1027')

  return (
    <>
      <h1>ChildB三種資料流-C-P</h1>
      <button
        onClick={() => {
          props.setDataFromChlidB(childBData)
        }}
      >
        送資料到Parent
      </button>
    </>
  )
}
export default ChildB
