import React from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="flex h-screen">
        <Sidebar />
        <div className=" flex-1 overflow-x-hidden overflow-y-auto p-4 bg-[#F5F7F8]">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
