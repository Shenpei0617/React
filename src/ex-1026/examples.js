import Counter from '../ex-1025/Counter'
import JsxValue from './JsxValue'
import StudentList from './StudentList'
import Demo from '../練習題/2.物件陣列處理練習/Demo'
//import Menu from '../練習題/1.選單項目/Menu'
import Parent from '../ex-1027/Parent'
// export default的話(導入名稱重複)，可以在導入(import)時直接改名稱
import ParentPropTypes from '../ex-1027/props-PropTypes/Parent'

import ParentDataFlow from '../ex-1027/props-三種資料流/ParentDataFlow'
import InputDemo from '../ex-1028/InputDemo'
import HTML5Form from '../ex-1028/HTML5Form'

//1031--------------------
import BMI from '../練習題/3.BMI計算/ex-1031-BMI'
import BirthSelect from '../練習題/4.日期下拉選單/ex-1031-BirthSelect'
import TodoApp from '../ex-1031/TodoApp'
import TodoApp2 from '../ex-1031/TodoApp2'

//1101
import TodoApp3 from '../ex-1101/TodoApp3'
import MultipleInput from '../ex-1101/MultipleInput'

//1102
import HTML5ValidForm from '../ex-1102/HTML5HTML5ValidFormForm'
import Lifecycle from '../ex-1102/CC-FC/Lifecycle'
import User from '../ex-1102/data/User'

export const examples = [
  {
    name: '1025計數器',
    path: '../ex-1025/Counter',
    component: Counter,
  },
  {
    name: '1026JSX中的值與表達式',
    path: './JsxValue',
    component: JsxValue,
  },
  {
    name: '1026 學生列表清單(map-key)',
    path: './StudentList',
    component: StudentList,
  },
  {
    name: '1026 物件陣列狀態處理練習',
    path: '.../練習題/2.物件陣列處理練習/Demo',
    component: Demo,
  },
  // {
  //   name: '1026 練習題-選單項目狀態',
  //   path: '../練習題/1.選單項目/Menu',
  //   component: Menu,
  // },
  {
    name: '1027 props屬性',
    path: '../ex-1027/Parent',
    component: Parent,
  },
  {
    name: '1027  PropTypes',
    path: './ex-1027/props-PropTypes/Parent',
    component: ParentPropTypes,
  },
  {
    name: '1027  三種資料流',
    path: '../ex-1027/props-三種資料流/ParentDataFlow',
    component: ParentDataFlow,
  },
  {
    name: '1028  可控/不可控標單元件',
    path: '../ex-1028/InputDemo',
    component: InputDemo,
  },
  {
    name: '1028  表單元素',
    path: '../ex-1028/HTML5Form',
    component: HTML5Form,
  },
  {
    name: '1031  BMI計算',
    path: '../練習題/ex-1031/ex-1031-BMI',
    component: BMI,
  },
  {
    name: '1031 生日下拉選單',
    path: '../練習題/ex-1031/ex-1031-BirthSelect',
    component: BirthSelect,
  },
  {
    name: '1031 代辦事項',
    path: '../ex-1031/TodoApp',
    component: TodoApp,
  },
  {
    name: '1031 代辦事項2',
    path: '../ex-1031/TodoApp2',
    component: TodoApp2,
  },
  {
    name: '1101 代辦事項3 改善',
    path: '../ex-1101/TodoApp3',
    component: TodoApp3,
  },
  {
    name: '1101 帳號密碼-多個表單元素共用單一state',
    path: '../ex-1101/MultipleInput',
    component: MultipleInput,
  },
  {
    name: '1102 表單驗證',
    path: '../ex-1102/HTML5HTML5ValidFormForm',
    component: HTML5ValidForm,
  },
  {
    name: '1102 生命周期方法-CC類別型元件與FC函式型元件',
    path: '../ex-1102/CC-FC/Lifecycle',
    component: Lifecycle,
  },
  {
    name: '1102 從伺服器載入資料',
    path: '../ex-1102/data/User',
    component: User,
  },
]
