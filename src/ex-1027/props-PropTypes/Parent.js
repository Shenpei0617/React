import Child from './Child'
function Parent() {
  return (
    <>
      <Child firstName="Eddy" lastName="Wan" />
      {/* <Child lastName="Wan" /> 錯誤寫法 */}
    </>
  )
}
export default Parent
