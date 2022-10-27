//PropTypes用於限制傳入屬性的類型(不符合時拋出警告，但仍會繼續執行)
//例如：限制姓名為字串、必填欄位
import PropTypes from 'prop-types'
function Child({ firstName, lastName }) {
  //const {cat,name,price}=props
  return (
    <>
      <h1>
        {firstName},{lastName}
      </h1>
    </>
  )
}
Child.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  //設定姓漢名的類型為字串，且欄位isRequired(必填)
}

export default Child
