import React from "react";
import { Link, Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="container pt-4">
      <h2>Проекты</h2>
      <hr />
      <nav>
        <ul>
          <li>
            <Link to="notebook">Блокнот</Link>
          </li>
          <li>
            <Link to="joke">Jokes</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Portfolio;
