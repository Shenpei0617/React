function ChildA(props) {
  return (
    <>
      <h1>ChildA三種資料流-P-C</h1>
      <p>來自Parent的資料: {props.parentData}</p>
      {/* 來自Parent的資料:useState('parent data') */}
    </>
  )
}
export default ChildA
