import React from "react";

const Navlink = ({ href, name, setMenuOpen }) => {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={href} className="nav-link">
        {name}
      </a>
    </li>
  );
};

export default Navlink;
