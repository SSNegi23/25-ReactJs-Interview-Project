import { NavLink } from "react-router-dom";
import { minorProjects } from "../../data/routes";

import { FaWindowClose } from "react-icons/fa";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <div
      className={`h-screen bg-gray-800 p-4 text-white transition-transform duration-600 md:text-nowrap ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <FaWindowClose
        className="mx-1 text-2xl"
        onClick={() => setIsSidebarOpen(false)}
      />
      <ul>
        {minorProjects.map(({ path, name }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `w-full p-2 m-1 font-semibold block ${
                  isActive
                    ? "bg-orange-700 text-white"
                    : "bg-orange-500 text-white"
                }`
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
