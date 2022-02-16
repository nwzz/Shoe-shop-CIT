import React from "react";
import { Link } from "react-router-dom";
import { navbarData } from "../../../../data/header";
import SubMenu from "./SubMenu";

const DesktopNavbar = () => {
  return (
    <nav className="hidden lg:block relative px-2 py-2 z-50">
      <ul className="flex items-center  justify-center gap-10 capitalize ">
        {navbarData.map((item, index) => (
          <div key={index}>
            {!item.children ? (
              <li className="py-1 relative group">
                <Link className="nav-item" to={item.to}>
                  {item.title}
                </Link>
              </li>
            ) : (
              <SubMenu item={item} />
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
