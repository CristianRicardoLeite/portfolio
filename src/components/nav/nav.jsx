import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {FaUserCircle} from 'react-icons/fa'
import {GiBlackBook} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContacts} from 'react-icons/md'

import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#Home' onClick={() => setActiveNav('#')} className={activeNav === '#Home' ? 'active' : ''}> <HiOutlineHome/></a>
      <a href='#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><FaUserCircle/></a>
      <a href='#Experience' onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><GiBlackBook/></a>
      <a href='#Services' onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#Contact' onClick={() => setActiveNav('#Contact')} className={activeNav === 'Contact' ? 'active' : ''}><MdOutlineContacts/></a>
    </nav>
  )
}

export default Nav
