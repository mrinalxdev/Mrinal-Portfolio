'use client'

import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter()
  return (
    <header>
      <div className='flex items-center justify-between px-6 py-6 cursor-default'>
        <Link href="/" className='uppercase text-[1.5rem] z-50 ml-4'>Mrinal <span className='text-gray-400'>Pramanick</span> </Link>

        <div className='flex items-center gap-4'>
            <Button 
            icon={BsFillArrowRightCircleFill}
            label="Contact"
            onClick={() => router.push('/contacts')}
            />
        </div>
      </div>
    </header>
  )
}

export default Navbar
