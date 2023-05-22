import React from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'
import { GiBlackBook } from 'react-icons/gi'
import { RiServiceLine } from 'react-icons/ri'
import { MdOutlineContacts } from 'react-icons/md'

import { useState, useEffect } from 'react'
import { Link, NavBar } from './nav-styles'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  useEffect(() => {

    if (activeNav === '#Contact')
      return

  }, [activeNav])

  return (
    <NavBar isActiveContact={activeNav === '#Contact' ? true : ''}>
      <Link href='#Home' onClick={() => setActiveNav('#Home')} isActiveNav={activeNav === '#Home' ? true : ''}> <HiOutlineHome /></Link>
      <Link href='#About' onClick={() => setActiveNav('#About')} isActiveNav={activeNav === '#About' ? true : ''}><FaUserCircle /></Link>
      <Link href='#Experience' onClick={() => setActiveNav('#Experience')} isActiveNav={activeNav === '#Experience' ? true : ''}><GiBlackBook /></Link>
      <Link href='#Services' onClick={() => setActiveNav('#Services')} isActiveNav={activeNav === '#Services' ? true : ''}><RiServiceLine /></Link>
      <Link href='#Contact' onClick={() => setActiveNav('#Contact')} isActiveNav={activeNav === '#Contact' ? true : ''} isActiveContact={activeNav === '#Contact' ? true : ''}><MdOutlineContacts /></Link>
    </NavBar >
  )
}

export default Nav
