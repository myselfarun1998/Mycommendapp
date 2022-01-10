import React from 'react'
import  "./style.css"
import myimg from "../img/myimg.png"

const Header = () => {
// let home= alert("am home page")

  return (
    <div>
      <ul className="menu">
        
      <li> <a href='#'>  home </a> </li>
      <li> <a href='#'> about  </a> </li>
      <li> <a href='#'> contact us </a> </li>
      </ul>
      <img src={myimg} alt='myimg'/>
    
    </div>
  )
}

export default Header
