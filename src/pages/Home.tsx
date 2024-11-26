import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Projects</h1>
      <p className="mt-4 text-lg">Explore minor and major projects from the menu.</p>
      <Link to={"/my-projects"}>Go to My Projects</Link>
    </div>
  );
};

export default Home;
