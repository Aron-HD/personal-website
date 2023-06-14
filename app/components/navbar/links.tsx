"use client";

import { ScrollFuncs } from "@/types";

const NavLinks = () => {

  const scrollFuncs: ScrollFuncs = {
    scrollToAbout: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
    scrollToProjects: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
    scrollToContact: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
  }


  const navLinks = [
    { name: "About", onClick: scrollFuncs.scrollToAbout },
    { name: "Projects", onClick: scrollFuncs.scrollToProjects },
    { name: "Contact", onClick: scrollFuncs.scrollToContact },
  ]

  return (
    <ul className="flex m-0 p-0 list-none gap-5 font-mono">
      {navLinks.map((nl, i) => (
        <li
          key={i}
          onClick={nl.onClick}
          className="group relative font-regular dark:text-accent-dark text-accent-light hover:cursor-pointer dark:hover:text-primary-dark hover:text-primary-light hover:bezier-all hover:duration-300 hover:ease-in-out hover:opacity-100 hover:font-bold"
        >
          <p className="inline font-bold static dark:text-primary-dark text-primary-light opacity-90 group-hover:opacity-100 mr-1">
            0{i + 1}.
          </p>
          {nl.name}
          <span className="group-hover:opacity-100 flex absolute opacity-0 h-[3px] w-full -bottom-1 -left-[3px] group-hover:left-0 group-hover:rounded-[20px] group-hover:transition-all group-hover:bg-primary group-hover:bezier-all" />
        </li>)
      )}
    </ul>
  )
}

export default NavLinks;