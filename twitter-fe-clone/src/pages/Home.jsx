import React from "react";
import MainContent from "../components/MainContent";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import Welcomescreen from "../components/Welcomescreen";

const Home = () => {
    return (
        <div className="">
            <Welcomescreen />
            <div className="px-5 md:px-[110px] bg-[#121212] home text-white flex md:justify-between gap-[10px] ">
              <Sidebar />
              <div className=" fixed bottom-[120px] right-[10%] rounded-full p-4 bg-[aqua] md:hidden">
               <svg viewBox="0 0 24 24" aria-hidden="true" className=" w-[60px] "><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
             </div>
              <MainContent />
              <Rightbar />
            </div>

        </div>
    )
}

export default Home