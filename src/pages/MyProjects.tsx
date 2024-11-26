import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { minorProjects, majorProjects } from "../data/routes";

import { FaRegWindowClose } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const MyProjects: React.FC = () => {
  const [loadItems, setLoadItems] = useState<number>(4);

  const handleLoadMore = () => {
    if (loadItems + 6 < minorProjects.length) {
      setLoadItems(loadItems + 6);
    } else {
      setLoadItems(minorProjects.length);
    }
  };

  return (
    <div className="h-screen w-screen p-4">
      <h1 className="text-center text-4xl font-bold mt-5">My Projects</h1>
      <div className="bg-blue-500 w-2/5 h-1 mx-auto my-4"></div>
      <section className="my-12">
        <h2 className="text-3xl font-semibold my-4 relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-gray-300 after:mt-2">
          Minor Project
        </h2>
        <ul className="list-disc pl-8">
          {minorProjects.slice(0, loadItems).map((project) => (
            <li key={project.id}>
              <Link
                to={`/minor-projects/${project.path}`}
                className="text-blue-500 underline"
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
        {loadItems < minorProjects.length ? (
          <button
            className="bg-blue-500 text-white p-2 m-4 rounded"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white p-2 m-4 rounded"
            onClick={() => setLoadItems(4)}
          >
            Show less
          </button>
        )}
      </section>
    </div>
  );

  //   const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
  //     const storedValue = localStorage.getItem("isSidebarOpen");
  //     return storedValue === "true" || storedValue === null;
  //   });

  //   useEffect(
  //     () => localStorage.setItem("isSidebarOpen", String(isSidebarOpen)),
  //     [isSidebarOpen]
  //   );

  //   return (
  //     <div className="flex gap-4 h-screen w-screen">
  //       {isSidebarOpen ? (
  //         <div className="flex-initial w-70 bg-blue-300 h-screen p-5">
  //           <div className="flex gap-4 font-bold justify-between items-center text-3xl mb-6">
  //             <h1>My Projects</h1>
  //             <FaRegWindowClose className="cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
  //           </div>
  //           <section className="mb-10">
  //             <h2 className="text-2xl font-semibold mb-4">Minor Projects</h2>
  //             <ul>
  //               {minorProjects.map((project) => (
  //                 <li key={project.id}>
  //                   <Link
  //                     to={`minor-projects/${project.path}`}
  //                     className="text-blue-500 underline"
  //                   >
  //                     {project.name}
  //                   </Link>
  //                 </li>
  //               ))}
  //             </ul>
  //           </section>

  //           <section>
  //             <h2 className="text-2xl font-semibold mb-4">Major Projects</h2>
  //             <ul>
  //               {majorProjects.map((project) => (
  //                 <li key={project.id}>
  //                   <Link
  //                     to={`major-projects/${project.path}`}
  //                     className="text-blue-500 underline"
  //                   >
  //                     {project.name}
  //                   </Link>
  //                 </li>
  //               ))}
  //             </ul>
  //           </section>
  //         </div>
  //       ) : (
  //         <div className="bg-slate-300 h-fit cursor-pointer relative top-6 text-3xl ml-5 p-1">
  //           <IoMdMenu onClick={() => setIsSidebarOpen(true)} />
  //         </div>
  //       )}

  //       {/* Outlet for Nested Routes */}
  //       <div className="flex-1 mt-10">
  //         <Outlet />
  //       </div>
  //     </div>
  //   );
};

export default MyProjects;
