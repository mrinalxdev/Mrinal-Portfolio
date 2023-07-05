'use client'

import Links from "./Links"
import {NavLinks } from '../app/constants/item'


interface DropMenuInt {
    setDrop : any 
}

const DropMenu = ({setDrop} : DropMenuInt) => {
  return (
    <div className="fixed bg-white top-5 left-5 right-5 rounded-[60px] shadow-2xl shadow-slate-600 z-50" onClick={() => setDrop(false)}>
      <nav className="flex flex-col">
        <ul className="min-h-[40vh] rounded-3xl lg:min-h-[30rem] h-[100%] flex flex-wrap lg:flex-nowrap uppercase text-center text-[1.7rem]">
            {NavLinks.map((item:any) => (
              <Links name={item.name} path={item.path} last={item.last}  />
            ) )}
        </ul>
      </nav>
    </div>
  )
}

export default DropMenu
