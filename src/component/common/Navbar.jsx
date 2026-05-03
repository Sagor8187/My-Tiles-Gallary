"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import 'animate.css';
import soft_bounce from"./my.css"
import { authClient } from "@/lib/auth-client";


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


  const { data: session } = authClient.useSession()
  const info = session?.user
  console.log(session)
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
          
           <li>{navItem("/", "Home")}</li>
          <li>{navItem("/all-tiles", "All Tiles")}</li>
          <li>{navItem("/profile", "My Profile")}</li>
          </ul>
            
          </div>
          <Link href={"/"} className="text-xl font-bold"><span className="text-2xl text-purple-700 ">Elite</span> Tiles</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul  className="menu menu-horizontal px-1 font-bold flex gap-2">
          <li>{navItem("/", "Home")}</li>
          <li>{navItem("/all-tiles", "All Tiles")}</li>
          <li>{navItem("/profile", "My Profile")}</li>
          </ul>
        </div>
        <div className="navbar-end">
          {info?<div className="flex justify-center gap-4 items-center">
            <h1 className="hidden md:block text-purple-600 font-bold">Welcome  <span className="font-bold text-black"> {info?.name}</span></h1>
            <div className="w-8"><img src={info?.image} className=" w-full rounded-full" alt="profile" /></div>
            <button onClick={()=>authClient.signOut()}  className="btn bg-purple-600 text-white font-bold">Logout</button>
            </div>: <Link href={"/login"}
           className="btn bg-purple-600 text-white font-bold">Login</Link>}
         
        </div>
      </div>
    </div>
  );
}
