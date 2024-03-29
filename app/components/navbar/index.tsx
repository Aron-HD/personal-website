"use client";

import { useState, useEffect, useRef } from "react"

// import NavBurger from "./NavBurger"
// import ThemeSwitcher from "./ThemeSwitcher"
import Logo from "../icons/logo"
import NavLinks from "./links"
import Social from "../social";
import ThemeSwitcher from "./themeSwitcher";

const NavClosed = () => {

  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [scrollingDown, setScrollingDown] = useState(false)

  let previousScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY

      if (offset > 20) setScrolledToTop(false)
      else setScrolledToTop(true)

      if (offset > previousScrollPosition.current && offset > 10) setScrollingDown(true)
      else setScrollingDown(false)
      previousScrollPosition.current = offset;
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`${scrollingDown ? "opacity-0 pointer-events-none" : "opacity-100"} ${scrolledToTop ? "static opacity-100" : "fixed"} 
       flex w-full ease-linear duration-300 transition-[all_0.25s_cubic-bezier(0.65,_0.05,_0.36,_1)] bg-transparent`
    } >
      <div className="flex w-full items-center justify-between m-auto px-5 py-5 md:px-10 bg-transparent">

      <Logo />
      {/* <NavBurger /> */}
      {/* <Box
        sx={{ display: ["none", "none", "flex"], alignItems: "center", gap: 4 }}
      > */}
      <div className="hidden md:flex items-center gap-4">
        <NavLinks />
        <ThemeSwitcher />
        {/* </Box> */}
      </div>
      <div className={`fixed hidden lg:flex flex-col center gap-6 bottom-0 left-[52px] top-[61%] h-screen`}>

        <Social className="flex flex-col gap-6" />
        <div title="stalk" className="h-full w-0 border-x-[1px] dark:border-accent-dark border-accent-light opacity-20 shadow" />
      </div>
      </div>
    </nav>
  )
}

export default NavClosed;
