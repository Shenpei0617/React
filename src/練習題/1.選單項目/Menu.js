import { useState } from 'react'
import './Menu.css'

function Menu() {
  const menuItems = ['首頁', '關於我們', '產品']
  const [activeIndex, setActiveIndex] = useState(-1)
  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setActiveIndex(i)
              }}
            >
              <a href="#/" className={activeIndex === i ? 'active' : ''}>
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
