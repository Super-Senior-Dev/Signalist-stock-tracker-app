import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import UserDropDown from './UserDropDown'

const Header = () => {
  return (
    <header className='sticky top-0 header'>
      <div className='container header-wrapper'>
        <Link href="/">
            <Image src="/assets/icons/logo.svg" alt="signalist logo" height={32} width={140} className='h-8 w-auto cursor-pointer' />
        </Link>
        <nav className='hidden sm:block'>
            <NavItems/>
        </nav>
        {/* User Dropdown */}
        <UserDropDown/>
      </div>
    </header>
  )
}

export default Header
