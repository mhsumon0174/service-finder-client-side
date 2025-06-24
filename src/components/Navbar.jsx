import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AUthContext";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        axios
          .post("https://assignment-11-server-fawn-seven.vercel.app/logout",{}, {
            withCredentials: true,
          })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Congratulations",
              text: "You Have Successfully Logged Out Successful",
              timer: 1400,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>{" "}
      </li>
      {user ? (
        <div className="lg:flex">
          <li>
            <NavLink to="/addservices">Add Service</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/myservices">My Services</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/myreviews">My Reviews</NavLink>{" "}
          </li>
        </div>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar w-11/12 mx-auto  sticky top-0 z-1 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img
          className="md:w-[40px] w-[25px] "
          src="https://i.ibb.co/fYbZ6L8V/servfinder-1-modified.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <Tooltip id="my-tooltip" />
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-4 items-center">
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              className="rounded-full w-8 sm:w-10"
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://i.ibb.co/MkLCp5dc/user.png"
              }
              alt=""
            />
            <Link to="/login">
              <button
                onClick={handleSignOut}
                className="btn btn-outline btn-secondary"
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login">
              <button className="btn btn-outline btn-secondary">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outline btn-secondary">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
