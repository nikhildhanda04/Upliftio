"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-7 transition-all duration-300 ${
        stickyMenu
          ? "bg-white !py-4 shadow dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo/logo-dark.png"
                alt="logo"
                width={60}
                height={30}
                className="hidden w-full dark:block"
              />
              <Image
                src="/images/logo/logo-light.png"
                alt="logo"
                width={60}
                height={30}
                className="w-full dark:hidden"
              />
            </Link>
          </div>

          {/* Nav Menu Start */}
          <div className="flex items-center">
            <nav className={`mr-10 hidden lg:block ${navigationOpen ? 'block' : 'hidden'}`}>
              <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
                {menuData.map((menuItem, key) => (
                  <li key={key} className={menuItem.submenu ? "group relative" : ""}>
                    {menuItem.submenu ? (
                      <>
                        <button
                          onClick={() => setDropdownToggler(!dropdownToggler)}
                          className="flex cursor-pointer items-center justify-between py-2 text-base text-black hover:text-primary dark:text-white lg:py-0 lg:pr-0 xl:text-white"
                        >
                          {menuItem.title}
                          <span className="pl-3">
                            <svg width="15" height="14" viewBox="0 0 15 14">
                              <path
                                d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>

                        <ul
                          className={`dropdown ${
                            dropdownToggler ? "flex" : ""
                          }`}
                        >
                          {menuItem.submenu.map((item, key) => (
                            <li key={key} className="hover:text-primary">
                              <Link href={item.path || "#"}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        className={`flex py-2 text-base text-black hover:text-primary dark:text-white lg:py-0 lg:text-white ${
                          pathUrl === menuItem.path
                            ? "text-primary dark:text-primary"
                            : ""
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-6">
              <Link
                href="https://nextjstemplates.com/templates/solid"
                className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
              >
                Contact Us
              </Link>
              <ThemeToggler />
            </div>

            {/* Hamburger Toggle Button */}
            <button
              aria-label="hamburger Toggler"
              className="block lg:hidden ml-4"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="absolute right-0 block h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                      !navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                      !navigationOpen ? "delay-400 !w-full" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                      !navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
                <span className="absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                      !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black delay-400 duration-200 ease-in-out dark:bg-white ${
                      !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={`lg:hidden ${
            navigationOpen
              ? "visible opacity-100 mt-4"
              : "invisible opacity-0"
          } bg-white dark:bg-black transition-all duration-300 ease-in-out`}
        >
          <nav className="py-4">
            <ul className="flex flex-col gap-4">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu ? "group relative" : ""}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex w-full cursor-pointer items-center justify-between py-2 text-base text-black hover:text-primary dark:text-white"
                      >
                        {menuItem.title}
                        <span className="pl-3">
                          <svg width="15" height="14" viewBox="0 0 15 14">
                            <path
                              d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown pl-4 ${
                          dropdownToggler ? "flex flex-col gap-2 mt-2" : "hidden"
                        }`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={`flex py-2 text-base text-black hover:text-primary dark:text-white ${
                        pathUrl === menuItem.path
                          ? "text-primary dark:text-primary"
                          : ""
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

