import React from "react";
import { BiHomeCircle } from 'react-icons/bi'

const Sidebar = () => {
    return(
       <div className="md:h-full flex md:flex-col flex-row bg-[red] justify-between bottom-0 fixed left-0 w-full md:relative  p-[2rem]">
          <div className="md:block hidden">Twitter</div>
          <div>
            <div className="justify-between h-[100%] flex flex-row md:flex-col">
          <div className="block">
            <BiHomeCircle />
          </div>
          <svg viewBox="0 0 24 24">
            <g>
             <path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path>
            </g>
          </svg>
          <div className="block">Hashtag</div>
          <div className="block">Communities</div>
          <div className="block">Notications</div>
          <div className="block">Message</div>
          <div className="md:block hidden">Bookmarks</div>
          <div className="md:block hidden">Profile</div>
          <div className="md:block hidden">More</div>
             </div>
             <div className="block">Tweet</div>
         </div>
          <div className="block">Accounts</div>
       </div>
    )
}

export default Sidebar