import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../Sidebar/m_Logo.png'
import {SidebarData} from './SidebarData';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';




export const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div> 
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <a  rel="index" href='/my_portfolio/' className="logo">
                        <img src={logo} alt="React Web Developer"></img>
                    </a>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>   
            </IconContext.Provider> 
        </div>  
    )
}
