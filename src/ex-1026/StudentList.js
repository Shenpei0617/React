import { data } from './data/student'
function StudentList() {
  return (
    <>
      <h1>學生資料清單</h1>
      <ul>
        {data.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}
export default StudentList
