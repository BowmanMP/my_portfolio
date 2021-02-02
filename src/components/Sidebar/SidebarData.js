import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';


export const SidebarData = [
    {
        title: 'Home', 
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }, 
    {
        title: 'About Me', 
        path: '/about',
        icon: <BsIcons.BsPerson />,
        cName: 'nav-text'
    },  
    {
        title: 'Skills / Projects', 
        path: '/myWork',
        icon: <BsIcons.BsEye />,
        cName: 'nav-text'
    }, 
    {
        title: 'Contact', 
        path: '/contact',
        icon: <AiIcons.AiOutlineMail />,
        cName: 'nav-text'
    }, 
]

export const logo = 'public/m_Logo.png';