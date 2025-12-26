import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";

const Layout = ({ handleLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      

      <div className="p-3  text-white d-lg-none w-25" handleLogout={handleLogout}>
        <button className="btn btn-light" onClick={toggleSidebar}>
          <FaBars size={20} />
        </button>
      </div>

      <div className="d-flex">
        <Sidebar
          handleLogout={handleLogout}
          isOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
        />

        <div className="p-4 w-100 bg-light" style={{ marginLeft: "250px" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
