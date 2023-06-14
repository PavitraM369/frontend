import React, { useState,useContext } from 'react'
import  './style.css'
import {globalContext}from '../../App'

function NavBar() {

  const [activeclass, setactiveclass] = useState(1)
  const { activeTab,setActiveTab }=useContext(globalContext)
  
  const HandleNavigtion = (state) =>{
    setActiveTab(state)
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto align-item-center">
      <li class="nav-item ">
        <span class="nav-link item " > <b> Asset Management </b></span>
      </li>
      <li class="nav-item cursor-pointer">
        <span class={`nav-link ${activeTab == 1 ? "active":""}`} onClick={()=>{HandleNavigtion(1)}}>List Asset</span>
      </li>
      <li class="nav-item cursor-pointer">
        <span class={`nav-link ${activeTab == 2 ? "active":""}`} onClick={()=>{HandleNavigtion(2)}}>Add Asset</span>
      </li>
    </ul>
    <span class="navbar-text">
    <span class="nav-link item mr-5 cursor-pointer" >Logout</span>
    </span>
  </div>
</nav>
    </div>
  )
}

export default NavBar
