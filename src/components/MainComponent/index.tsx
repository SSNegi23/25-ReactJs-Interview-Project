import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

import { IoMdMenu } from "react-icons/io";

const MainComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    const stored = localStorage.getItem("sidebarOpen");
    return stored === "true" || false;
  });

  useEffect(() => {
    localStorage.setItem("sidebarOpen", String(isSidebarOpen));
  }, [isSidebarOpen]);

  return (
    <div className="h-screen w-screen flex gap-4 bg-slate-300">
      {isSidebarOpen ? (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
      ) : (
        <button
          className="absolute text-2xl top-2 left-2 bg-slate-500 rounded-sm"
          aria-label="Open Sidebar"
          onClick={() => setIsSidebarOpen(true)}
        >
          <IoMdMenu />
        </button>
      )}

      <Outlet />
    </div>
  );
};

export default MainComponent;
