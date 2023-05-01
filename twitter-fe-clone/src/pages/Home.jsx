import React from "react";
import Sidebar from "../components/Sidebar";
import Welcomescreen from "../components/Welcomescreen";

const Home = () => {
    return (
        <div className="p-5 md:px-[200px] bg-[#121212] text-white h-[100vh]">
            <Sidebar />
        </div>
    )
}

export default Home