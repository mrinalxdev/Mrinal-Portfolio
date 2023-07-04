'use client'

import Links from "./Links"


interface DropMenuInt {
    setDrop : any 
}

const DropMenu = ({setDrop} : DropMenuInt) => {
  return (
    <div className="fixed bg-white top-5 left-5 rounded-3xl shadow-2xl shadow-slate-600 z-50" onClick={() => setDrop(false)}>
      <nav className="flex flex-col">
        <ul className="min-h-[40vh] rounded-3xl lg:min-h-[30vh] h-[100%] flex flex-wrap lg:flex-nowrap uppercase text-center text-[1.7rem]">
            <Links />
        </ul>
      </nav>
    </div>
  )
}

export default DropMenu
