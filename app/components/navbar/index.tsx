"use client";

import { useState, useEffect } from "react"

// import NavBurger from "./NavBurger"
// import ThemeSwitcher from "./ThemeSwitcher"
import Logo from "../icons/logo"
import NavLinks from "./links"
import Social from "../social";

const NavClosed = ({ scrollFuncs }: Partial<ScrollFuncsProps>) => {

  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [scrollingDown, setScrollingDown] = useState(false)

  // create a handleScroll function where we set the scroll state to true if the offset increases.

  let previousScrollPosition = 0;

  const handleScroll = () => {
    const offset = window.scrollY
    // convert the offset to a percentage
    const p = Math.floor(offset / (document.body.scrollHeight - window.innerHeight) * 100);

    if (offset > 20) setScrolledToTop(false)
    else setScrolledToTop(true)

    if (offset > previousScrollPosition && offset > 100) setScrollingDown(true)
    else setScrollingDown(false)
    previousScrollPosition = offset;
  }
  useEffect(() => window.addEventListener("scroll", handleScroll), [previousScrollPosition])

  return (
    <nav className={`${scrollingDown ? "opacity-0" : "opacity-100"} ${scrolledToTop ? "static opacity-100" : "fixed"} 
      flex w-full items-center justify-between m-auto p-[20px_40px] ease-linear duration-300 transition-[all_0.25s_cubic-bezier(0.65,_0.05,_0.36,_1)]`
    } >
      <Logo scrollFunc={scrollFuncs?.scrollToHome} />
      {/* <NavBurger /> */}
      {/* <Box
        sx={{ display: ["none", "none", "flex"], alignItems: "center", gap: 4 }}
      > */}
      <div className="hidden md:flex items-center gap-4">
        <NavLinks scrollFuncs={scrollFuncs} />
        {/* <ThemeSwitcher /> */}
        {/* </Box> */}
      </div>
      <div className={`fixed hidden lg:flex flex-col center gap-6 bottom-0 left-[52px] top-[61%] h-screen`}>

        <Social className="flex flex-col gap-6" />
        <div title="stalk" className="h-full w-0 border-x-[1px] border-secondary opacity-20 shadow" />
      </div>
    </nav>
  )
}

export default NavClosed
