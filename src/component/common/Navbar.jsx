"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import 'animate.css';
import soft_bounce from"./my.css"

export default function Navbar() {
    const pathname = usePathname()

  const navItem = (href, label) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md transition ${
        pathname === href
          ? "bg-purple-600 text-white animate__animated soft_bounce animate__infinite animate__slow"
          : "hover:bg-gray-200"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm animate__animated animate__slideInDown animate__faster">
        <div className="navbar-start">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
            <ul  className="menu menu-horizontal px-1 font-bold">
           <li>{navItem("/", "Home")}</li>
          <li>{navItem("/all-tiles", "All Tiles")}</li>
          <li>{navItem("/profile", "My Profile")}</li>
          </ul>
            </ul>
          </div>
          <a className="text-xl font-bold"><span className="text-2xl text-purple-700 ">Elite</span> Tiles</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul  className="menu menu-horizontal px-1 font-bold flex gap-2">
          <li>{navItem("/", "Home")}</li>
          <li>{navItem("/all-tiles", "All Tiles")}</li>
          <li>{navItem("/profile", "My Profile")}</li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-purple-600 text-white font-bold">Login</a>
        </div>
      </div>
    </div>
  );
}
