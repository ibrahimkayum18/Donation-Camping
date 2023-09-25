import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center mt-12 lg:mt-5">
      <div>
        <img className="w-[70%] md:w-[75%] lg:w-[100%] " src="https://i.ibb.co/rZP28jy/Logo.png" alt="" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-5 lg:space-x-12">
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
