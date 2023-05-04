import React from 'react'

const SidebarComp = ({name, pathd}) => {
  return (
    <div className="block  md:mb-[30px] flex  justify-center xl:justify-start cursor-pointer">
        <svg viewBox="0 0 24 24" aria-hidden="true" className=" w-6 fill-white "><g><path d={pathd}></path></g></svg>
        <h3 className="text-2xl xl:block hidden ml-5">{name}</h3>
    </div>
  )
}

export default SidebarComp