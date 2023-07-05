'use client'
import Link from 'next/link'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

interface LinksProps {
  path: string,
  name: string,
  last?: boolean
}

const Links = ({ path , last, name }: LinksProps) => {
  return (
    <Link href={path} className={`pseudo cursor-pointer pb-4 min-h-[100%] w-full justify-center flex relative items-end hover:text-purple-400 ${last ? 'before:hidden' : ''}`}>
      <div className='flex items-center gap-6 hover:last-of-type:-rotate-12'>
        <div>{name}</div>
        <BsArrowUpRight />
      </div>
    </Link>
  )
}

export default Links
