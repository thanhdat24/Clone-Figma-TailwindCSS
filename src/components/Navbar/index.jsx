import React from "react";
import logo from "../../assets/images/logo.png";
import Button from "../Button";
export default function Navbar() {
  return (
    <nav className=" bg-secondary w-full transition-base pt-[38px] pb-[65px]  ">
      <div className="sticky container mx-auto top-0  flex justify-between ">
        <a href="/" className="flex items-center drop-shadow ">
          <img src={logo} alt="logo" />
          <div className="text-[25px] leading-7 font-bold text-violetlight ml-2">
            E- School
          </div>
        </a>
        <div className="flex">
          <ul className="flex items-center gap-x-12 text-black text-base leading-6 font-normal">
            <li>
              <a href="#!" className="text-black ">
                Books
              </a>
            </li>
            <li>
              <a href="#!" className="text-black ">
                Courses
              </a>
            </li>
            <li>
              <a href="#!" className="text-black ">
                Others
              </a>
            </li>
            <li>
              <a href="#!" className="text-black ">
                Blog
              </a>
            </li>
          </ul>
          <Button className="ml-8">Sign in</Button>
        </div>
      </div>
    </nav>
  );
}
