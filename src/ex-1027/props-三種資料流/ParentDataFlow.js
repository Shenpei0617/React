import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [parentData, setParentData] = useState('parent data')

  //為了接收ChildB回傳的資料
  const [dataFromChildB, setDataFromChlidB] = useState('')
  return (
    <>
      <h1>Parent</h1>
      <p>來自ChildB的資料:{dataFromChildB}</p>
      <hr />
      <ChildA parentData={parentData} />
      <ChildB setDataFromChlidB={setDataFromChlidB} />
    </>
  )
}
export default Parent
