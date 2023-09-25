import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src="https://i.ibb.co/rZP28jy/Logo.png" alt="" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-12">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active underline text-[#FF444A]" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active underline text-[#FF444A]" : ""
            }
          >
            Donation
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active underline text-[#FF444A]" : ""
            }
          >
            Statistics
          </NavLink>
          
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
