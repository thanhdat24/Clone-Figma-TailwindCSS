import React from "react";
import Button from "../Button";

export default function Footer() {
  return (
    <footer className="bg-violet">
      <div className="container ">
        <div className="grid grid-cols-4">
          <div className="mt-[65px] w-[110%]">
            <div className="text-white leading-[30px] font-normal">
              Millions of people of all ages and from around the world are
              improving their lives with us
            </div>
          </div>
          <div className="mt-[65px]  flex justify-end ">
            <ul>
              <li className="mb-2">
                <a href="/" className="text-white font-bold">
                  Course
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Graphic Design
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Web Design
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Business
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Engineering
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-[65px]  flex justify-end ">
            <ul>
              <li className="mb-2">
                <a href="/" className="text-white font-bold">
                  Terms
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Graphic Design
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Web Design
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Business
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Engineering
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-[65px]  flex justify-end ">
            <ul>
              <li className="mb-2">
                <a href="/" className="text-white font-bold">
                  Useful Link
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Graphic Design
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Web Design
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Business
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white">
                  Engineering
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-[76px] pb-[27px]">
        <p className="text-footergray leading-[30px]">
          Copyright © 2020 www.com
        </p>
      </div>
    </footer>
  );
}
