"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white shadow-sticky transition "
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5" : "py-8"
                } `}
              >
                <svg
                  version="1.1"
                  className={`nav-fill-svg w-[121px] ${
                    sticky ? "fill-black" : "fill-white"
                  }`}
                  x="0px"
                  y="0px"
                  viewBox="0 0 120.9 25"
                >
                  {" "}
                  <g id="hex__logo_Layer_1"> </g>{" "}
                  <g id="hex__logo_art_2">
                    {" "}
                    <g id="hex__logo">
                      {" "}
                      <g>
                        {" "}
                        <path
                          className="hex__logo_st0"
                          d="M8.3,8.7C7.9,8.6,6.9,8.5,5.8,8.8c-0.4,0.1-1.2,0.3-2,0.7l0-7.3c0-1.1-0.9-1.9-1.9-1.9S0,1.2,0,2.2L0,23                    c0,1.1,0.9,1.9,1.9,1.9C3,24.9,3.8,24,3.8,23l0-7.5v0c0.2-0.7,0.4-1.2,0.8-1.7c0.2-0.3,0.9-1,2-1.1c1.6-0.2,2.7,0.7,2.9,0.9                    c1.2,1.1,1.2,2.5,1.2,2.7l0,7.1c0,0.9,0.8,1.7,1.8,1.7h0c1,0,1.8-0.8,1.8-1.7l0-7.5c0-1.5-0.5-2.6-0.8-3.1                    C12.6,10.5,10.5,9,8.3,8.7z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M78.2,8.5c-0.3,0-0.8-0.1-1.3,0c-2.8,0.2-4.8,2-5.2,2.4c-2.3,2.3-2.4,5.2-2.4,5.7c0,0.9,0.1,3.3,1.9,5.4                    c1.3,1.5,3.3,2.5,5.7,2.7c0.3,0,0.6,0.1,1.1,0.1l0,0c0,0,0,0,0,0v0c3.4-0.1,5.7-2.6,5.8-2.7c0.3-0.3,1.9-2.4,1.9-5.4                    C85.8,12.4,82.5,8.8,78.2,8.5z M81.7,16.8c-0.1,2.3-2.1,4.1-4.4,4c-2.3-0.1-4.2-2-4.1-4.3c0.1-2.3,2.1-4.1,4.4-4                    C80,12.5,81.8,14.5,81.7,16.8z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M59.8,8.7c-1.5,0-2.9,0.4-4.1,1.2c-0.3-0.8-1-1.3-1.9-1.3c-1.1,0-2,0.9-2,2l0,12.2c0,1.1,0.9,2,2,2                    c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.9,0,1.7-0.7,1.7-1.7l0-6.9c0-0.1,0.1-0.3,0.2-0.6c0-0.1,0.2-0.7,0.3-1                    c0.4-0.9,1.1-1.4,1.3-1.5c0.8-0.5,1.5-0.6,1.7-0.6c0.6,0,1,0.1,1.3,0.1c0.2,0.1,1,0.3,1.6,0.9c1,1,1.2,2.3,1.2,2.6                    c0,2.3,0,4.6,0,6.9c0,0.2,0.1,0.7,0.6,1.1c0.6,0.5,1.2,0.5,1.3,0.5h0c0.9,0,1.7-0.7,1.7-1.7l0-7.3c-0.1-0.8-0.3-2.1-1.1-3.4                    C65.8,12,63.7,8.8,59.8,8.7z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M118.2,10.3c-1.9-1.5-4.1-1.6-4.4-1.6c-0.3,0-1.4,0-2.8,0.4c-1.7,0.6-2.8,1.5-3.1,1.8                    c-2.4,2.2-2.5,5.2-2.6,5.7c0,0.7-0.1,3.2,1.7,5.5c1.9,2.3,4.4,2.7,5.1,2.8c1.1,0.2,2.2,0.1,2.5,0c0.5-0.1,1.3-0.2,2.4-0.6                    c1.4-0.6,2.3-1.4,2.9-2.1c0.3-0.8,0.3-1.6-0.2-2.1c-0.4-0.4-0.9-0.6-1-0.6c-0.9-0.2-1.7,0.3-1.8,0.4c-0.2,0.2-0.5,0.5-0.9,0.7                    c-0.8,0.5-1.6,0.5-2.1,0.5c-0.4,0-1.8,0.1-3-0.9c-1.1-0.8-1.5-1.8-1.7-2.2l11.7,0C121.3,15,120.3,12,118.2,10.3z M110.8,13.4                    c1.1-0.7,2.1-0.8,2.6-0.8c0.4,0,1.4,0,2.4,0.7c0.6,0.4,0.9,0.9,1.2,1.3l-7.3,0C109.9,14.2,110.3,13.8,110.8,13.4z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M38.2,16.1c1-1,1.9-2,2.9-3c-1.2-1.2-2.4-2.4-3.7-3.6c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9                    C35.7,13.6,36.9,14.8,38.2,16.1z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M49.1,9.1c-0.8-0.8-2.1-0.7-2.8,0.1L34.5,21.5c-0.8,0.8-0.7,2.1,0.1,2.8c0.8,0.8,2.1,0.7,2.8-0.1l4.3-4.5                    l4.4,4.4c0.8,0.8,2.1,0.8,2.9,0c0.8-0.8,0.8-2.1,0-2.9l-4.4-4.5l4.6-4.8C50,11.1,49.9,9.9,49.1,9.1z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M101.7,0c-1.1,0-2,0.9-2,2l0,8c-1.1-0.8-2.5-1.3-3.9-1.4v0c-0.3,0-0.8-0.1-1.3,0c-2.8,0.2-4.7,2-5.1,2.4                    C87,13.2,87,16.1,87,16.6c0,0.9,0.1,3.3,1.9,5.4c1.3,1.5,3.2,2.5,5.6,2.7c0.3,0,0.6,0.1,1.1,0.1l0,0c0,0,0,0,0,0l0,0                    c1.8-0.1,3.2-0.8,4.2-1.5c0.2,0.8,1,1.4,1.9,1.4c1.1,0,2-0.9,2-2l0-20.8C103.6,0.9,102.7,0,101.7,0z M99.4,16.8                    c-0.1,2.4-2.1,4.3-4.5,4.2c-2.4-0.1-4.2-2.1-4.1-4.5c0.1-2.4,2.1-4.3,4.5-4.2C97.7,12.4,99.5,14.4,99.4,16.8z"
                        ></path>{" "}
                        <path
                          className="hex__logo_st0"
                          d="M29.3,10.4c-1.9-1.5-4.1-1.6-4.4-1.6c-0.3,0-1.4,0-2.8,0.4c-1.7,0.6-2.8,1.5-3.1,1.8                    c-2.4,2.2-2.5,5.2-2.6,5.7c0,0.7-0.1,3.2,1.7,5.5c1.9,2.3,4.4,2.7,5.1,2.8c1.1,0.2,2.2,0.1,2.5,0c0.5-0.1,1.3-0.2,2.4-0.6                    c1.4-0.6,2.3-1.4,2.9-2.1c0.3-0.8,0.3-1.6-0.2-2.1c-0.4-0.4-0.9-0.6-1-0.6c-0.9-0.2-1.7,0.3-1.8,0.4c-0.2,0.2-0.5,0.5-0.9,0.7                    c-0.8,0.5-1.6,0.5-2.1,0.5c-0.4,0-1.8,0.1-3-0.9c-1.1-0.8-1.5-1.8-1.7-2.2l11.7,0C32.4,15,31.4,12.1,29.3,10.4z M21.9,13.5                    c1.1-0.7,2.1-0.8,2.6-0.8c0.4,0,1.4,0,2.4,0.7c0.6,0.4,0.9,0.9,1.2,1.3l-7.3,0C21,14.3,21.4,13.8,21.9,13.5z"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 
                    ${navbarOpen ? " top-[7px] rotate-45" : ""} 
                    ${sticky ? " bg-black" : " bg-white"}`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300
                    ${navbarOpen ? " top-[7px] rotate-45" : ""} 
                    ${sticky ? " bg-black" : " bg-white"}`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300
                    ${navbarOpen ? " top-[-8px] -rotate-45" : ""}
                    ${sticky ? " bg-black" : " bg-white"}`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  {/* <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul> */}
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/signup"
                  className="ease-in-up hidden rounded-sm bg-[#bb022a] px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
                >
                  14 Day Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
