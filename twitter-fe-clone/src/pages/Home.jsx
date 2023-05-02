import React from "react";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import Welcomescreen from "../components/Welcomescreen";

const Home = () => {
    return (
        <div className="">
            <Welcomescreen />
            <div className="p-5 md:px-[110px] bg-[#121212] text-white h-[100vh] flex">
              <Sidebar />
              <MainContent />
            </div>

        </div>
    )
}

export default Home