function JsxValue() {
  return (
    <>
      <h1>JSX中的值與表達式</h1>
      <hr />
      <h2>Number</h2>
      {100 + 1}
      {NaN}
      <h2>String</h2>
      {'abc'}
      {`total=${100 - 50}`}
      <h2>Bolleam</h2>
      {true}
      {false}
      <h2>Null</h2>
      {null}
      {/* 渲染時不會出現在畫面 */}
      <h2>UnDefined</h2>
      {undefined}
      {/* 渲染時不會出現在畫面 */}
      <h2>Array</h2>
      {[1, 2, 3]}
      {/* 變成字串 */}
      <h2>Object</h2>
      {/* 會出現Objects are not valid的中斷錯誤 */}
      {/* {{a:1,b:2}} */}
      <h2>function</h2>
      {/* {()=>{}} */}
      {(() => 100)()}
      {/* 要變成立即執行才會出現，或依照return的布林值決定要不要渲染 */}
    </>
  )
}
export default JsxValue
