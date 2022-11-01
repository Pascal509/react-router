// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="nav">
//       <ul>
//         <li>
//           <Link to="/">HOME</Link>
//         </li>
//         <li>
//           <Link to="/About">ABOUT</Link>
//         </li>
//         <li>
//           <Link to="/Contact">CONTACT</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;



import React from "react";
import { NavLink } from "react-router-dom";

   const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/users">
        User
      </NavLink>
    </nav>
  );
};

export default Navbar;