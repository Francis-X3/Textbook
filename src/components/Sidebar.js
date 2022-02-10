import React, { useState } from 'react'
import "./Sidebar.css"
// import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { sidebardata } from './sidebardata'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
// import * as IoIcons from 'react-icons/io'
// import * as RiIcons from 'react-icons/ri'

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [subnav,setSubnav] = useState(false);
   const ShowSubnav = ()=> setSubnav(!subnav);




  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="Sidebar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className="navbar-toggle">
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {sidebardata.map((item, index) => {

              return (
                <li key={index} className={item.cName}>
                  <Link to={item.link}>
                    {item.Icon}
                    <span>
                      {item.title}
                    </span>
                    {item.subNav || subnav ? item.IconOpen : item.subNav ? item.IconClosed : null}

                    {subnav && item.subNav.map((item,index)=>{
                    return(
                    <li>
                      <Link to={item.link}>
                        {item.Icon}
                        <span>{item.title}</span>
                        <span>{item.title}</span>
                      </Link>
                    </li>)
                  })}
                    
                  </Link>
                </li>
                
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}
